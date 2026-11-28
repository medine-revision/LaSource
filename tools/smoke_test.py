"""Test automatique de bout en bout (navigateur headless).

Usage :  python3 tools/smoke_test.py            (teste ./index.html)
         python3 tools/smoke_test.py URL        (teste une autre adresse)

Vérifie : aucune erreur JavaScript, 4 niveaux joués jusqu'au bout, historique,
cours, fenêtre « Revoir la leçon », mode nuit, choix de page, 6 choix par QCM,
aucune réponse qui déborde, et aucune question semblable dans les 40 dernières.
Nécessite : pip install playwright + un Chrome/Chromium (CHROME=/chemin/vers/chrome).
"""
import asyncio, os, sys, pathlib
from playwright.async_api import async_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
URL = sys.argv[1] if len(sys.argv) > 1 else (ROOT / 'index.html').as_uri()
CHROME = os.environ.get('CHROME', '/usr/bin/google-chrome')

async def answer(pg):
    if await pg.query_selector('.opt'):
        await pg.click('.opt')
    elif await pg.query_selector('#inp'):
        await pg.fill('#inp', 'x'); await pg.click('#f .btn')
    else:
        t = await pg.query_selector('#src .t')
        if t: await t.click()
        await pg.click('#val')

async def main():
    problems = []
    async with async_playwright() as p:
        kw = {'executable_path': CHROME} if os.path.exists(CHROME) else {}
        b = await p.chromium.launch(args=['--no-sandbox', '--allow-file-access-from-files'], **kw)
        pg = await b.new_page(viewport={'width': 390, 'height': 844})
        pg.on('pageerror', lambda e: problems.append('Erreur JS : ' + str(e)))
        await pg.goto(URL); await pg.wait_for_timeout(700)
        await pg.evaluate('localStorage.clear()'); await pg.reload(); await pg.wait_for_timeout(700)
        await pg.select_option('#to', '23')
        seen = []
        for diff in ['easy', 'medium', 'hard', 'mix']:
            await pg.click(f'.seg[data-key=diff] button[data-v={diff}]')
            await pg.click('.seg[data-key=count] button[data-v="40"]')
            await pg.click('#go')
            for i in range(40):
                if await pg.query_selector('.rescard'): break
                seen.append(await pg.evaluate("JSON.parse(localStorage.getItem('m1recent:guest')||'[]').slice(-1)[0]"))
                n = await pg.evaluate("document.querySelectorAll('.opt').length")
                if n and n != 6: problems.append(f'QCM avec {n} choix')
                await pg.wait_for_timeout(150)
                over = await pg.evaluate("[...document.querySelectorAll('.opt .ot')].filter(e=>e.scrollWidth>e.clientWidth+1).length")
                if over: problems.append('Texte de réponse qui déborde')
                await answer(pg)
                if i % 9 == 0 and await pg.query_selector('[data-sheet]'):
                    await pg.click('[data-sheet]'); await pg.wait_for_timeout(250)
                    await pg.click('.sheet .x'); await pg.wait_for_timeout(250)
                await pg.click('#nx')
            await pg.click('#again')
        rep = sum(1 for i, k in enumerate(seen) if k in seen[max(0, i - 40):i])
        if rep: problems.append(f'{rep} question(s) répétée(s) dans une fenêtre de 40')
        await pg.click('#tab-hist'); await pg.wait_for_timeout(200)
        if await pg.evaluate("document.querySelectorAll('.hr').length") < 4: problems.append('Historique incomplet')
        await pg.click('#tab-cours')
        if await pg.evaluate("document.querySelectorAll('details.les').length") != 23: problems.append('Cours : il ne montre pas 23 leçons')
        # prénom facultatif : ouvrir le lien discret, entrer un prénom, l'historique invité est repris
        await pg.click('#tab-train'); await pg.click('details.pf > summary')
        await pg.fill('#nm', 'Test'); await pg.click('#lf .btn'); await pg.wait_for_timeout(300)
        await pg.click('#tab-hist'); await pg.wait_for_timeout(200)
        if await pg.evaluate("document.querySelectorAll('.hr').length") < 4: problems.append('Prénom : historique invité non repris')
        await pg.click('#out'); await pg.wait_for_timeout(200)
        await pg.click('#theme'); await pg.click('#tab-train')
        await pg.click('#pp'); await pg.click('#pok')
        print(f'{len(seen)} questions jouées.')
        await b.close()
    if problems:
        print('PROBLÈMES :\n- ' + '\n- '.join(dict.fromkeys(problems))); sys.exit(1)
    print('Tout est OK ✔')

asyncio.run(main())
