"""Assemble tout le site en UN seul fichier HTML (dist/medine-revision.html).

Utile pour : la version publiée sur claude.ai, un envoi par mail, une clé USB…
Usage : python3 tools/build_single.py
"""
import re, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
html = (ROOT / 'index.html').read_text(encoding='utf-8')
css = (ROOT / 'css' / 'style.css').read_text(encoding='utf-8')
html = re.sub(r'<link rel="stylesheet" href="css/style\.css[^"]*">', lambda m: '<style>\n' + css + '</style>', html)
srcs = re.findall(r'<script src="(js/[^"?]+)[^"]*"></script>\n?', html)
js = '\n'.join((ROOT / s).read_text(encoding='utf-8') for s in srcs)
html = re.sub(r'<!-- Scripts :.*?-->\n', '', html)
html = re.sub(r'(<script src="js/[^"]+"></script>\n?)+', lambda m: '<script>\n' + js.replace('</script', '<\\/script') + '\n</script>\n', html)
out = ROOT / 'dist'; out.mkdir(exist_ok=True)
(out / 'medine-revision.html').write_text(html, encoding='utf-8')
print('Écrit :', out / 'medine-revision.html', f'({len(html)//1024} Ko)')
