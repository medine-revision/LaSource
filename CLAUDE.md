# CLAUDE.md — Guide du projet pour Claude

> À lire en premier à chaque nouvelle session. Ce fichier explique **tout** le projet :
> le but, les décisions déjà prises avec l'utilisateur, l'architecture, les données,
> les pièges connus et la procédure pour modifier puis publier.

---

## 1. Le projet en bref

- **Quoi** : un site de révision du **Tome 1 de Médine** (دروس اللغة العربية لغير الناطقين بها, Dr V. Abdur Rahim) — vocabulaire + grammaire, leçon par leçon, français ⇄ arabe.
- **Pour qui** : les élèves des cours d'arabe de **La Source asbl** (Science en pratique, 225 Chaussée de Jette, 1080 Bruxelles — https://www.science-pratique.be/fr). Débutants, souvent sur **téléphone**. L'asbl a donné son accord pour l'usage de son logo et de son nom.
- **Propriétaire** : Aïman (compte GitHub `Aiman1080`), dépôt **`medine-revision/LaSource`** (organisation `medine-revision`, nom neutre choisi exprès pour ne pas afficher son nom).
- **En ligne** : https://medine-revision.github.io/LaSource/ (GitHub Pages, branche `main`, racine `/`).
- **Langue** : toute l'interface et la documentation sont **en français**. L'utilisateur écrit de façon informelle ; répondre en français, simplement.

## 2. Règles et préférences de l'utilisateur (à respecter)

1. **Simple avant tout** : public ciblé, pas technique. Pas d'écran surchargé, messages courts.
2. **Ne jamais montrer de contenu au-delà de la leçon choisie** dans les questions (filtre `S.from`…`S.to`). L'onglet **Cours**, lui, montre **toujours les 23 leçons**.
3. **Tirage 100 % aléatoire** + **aucune question semblable aux 40 dernières** (voir §6).
4. **Choix multiple = 6 réponses**, avec des pièges proches (voyelle finale, ال, mots qui se ressemblent).
5. **Trois niveaux** : Facile (6 choix), Moyen (glisser-déposer mots/lettres), Difficile (écrire), + Mélangé. Dans chaque liste de choix, l'option « tout / mélangé » est **en premier**.
6. **Harakāt toujours visibles** dans le Cours, les résumés, les explications et les options de grammaire. La case « Afficher les voyelles » ne concerne **que** les questions de mots/phrases du quiz.
7. **Lisibilité de l'arabe** : police Noto Naskh Arabic, jamais sous 23 px dans les réponses, interligne ≈ 1.9–2 (sinon les voyelles sont coupées).
8. **Aucun texte ne doit déborder** d'un bouton : `fitOpts()` réduit la taille puis passe à la ligne.
9. **Design** : couleurs de La Source (bleu nuit `#17223a`, bleu `#4fa6ee`), dégradés doux. **Pas de motifs/symboles** (étoiles, vagues : refusés par l'utilisateur). Mode jour **bien contrasté** + mode nuit.
10. **Pages** : les numéros de page sont ceux de la **version arabe d'origine**. La version française (même auteur, mêmes leçons) a d'autres pages → conseiller de choisir la leçon. Note courte uniquement.
11. **« Jusqu'où as-tu étudié ? »** : bouton **Par leçon / Page précise** (`S.pick`). Par leçon = deux boutons De/Jusqu'à (numéro + **titre court** `s`) qui ouvrent une **liste en fenêtre** avec les 23 leçons, leurs titres et leurs pages (`pickLesson`). Page précise = boutons −/+ et flèches **sans recharger**, application seulement via **Valider** (ou Entrée) ; la page est convertie en leçon (granularité = la leçon, voir §9).
12. **Prénom facultatif et discret** : on révise directement sans rien taper (profil invité `GP`). Un petit lien en bas de l'accueil/historique « Plusieurs personnes sur cet appareil ? Ajouter mon prénom » sert seulement aux appareils partagés. Ne pas le remettre en avant.
13. Toujours **pousser sur `main`** après une modification demandée (l'utilisateur veut voir la dernière version en ligne directement).

## 3. Arborescence

```
index.html              Structure de la page + ordre de chargement des scripts (avec ?v=VERSION)
css/style.css           Tout le style (variables de couleurs light-dark en haut)
js/data/lessons.js      CONTENU : const D = [ …23 leçons… ]      → voir docs/CONTENU.md
js/data/summaries.js    CONTENU : const SUM = { 1:"…|…", … }      (résumés du Cours)
js/core/utils.js        $, LS (localStorage sûr), nAr/nFr (normalisation), rnd/shuf/pick, lev/sim, esc
js/core/items.js        D → ITEMS (liste plate de toutes les questions), KIND
js/core/generators.js   Générateur de questions de grammaire (GENS, genQ) + catégories de noms
js/core/state.js        Réglages S, profils ME, stats, historique, base claude.ai (DB)
js/ui/theme-audio.js    Mode nuit, synthèse vocale (speak), boutons « Écouter »
js/ui/home.js           Onglets, accueil (carte Salam, profil, réglages, page+Valider), Historique
js/quiz/build.js        Construction d'une question (QCM/tuiles/écriture), pièges, check()
js/quiz/keyboard.js     Clavier arabe à l'écran + clavier PC → arabe
js/quiz/dnd.js          Glisser-déposer des tuiles
js/quiz/session.js      Tirage (draw), affichage (show), correction (done), résultat (finish), fitOpts
js/ui/cours.js          Onglet Cours, fenêtre « Revoir la leçon », explications « Pourquoi ? »
js/main.js              APP_VERSION + démarrage
tools/check_data.mjs    Vérifie le contenu (format, doublons, résumés manquants)
tools/smoke_test.py     Test navigateur complet (4 niveaux, 160 questions, pas d'erreur)
tools/bump_version.py   Met à jour ?v= et APP_VERSION (à lancer avant chaque push)
tools/build_single.py   Assemble tout en un seul fichier dist/medine-revision.html
docs/CONTENU.md         Format exact des données + comment ajouter/corriger du contenu
```

## 4. Architecture JavaScript (important)

- **Pas de framework, pas de build, pas de modules ES.** Des **scripts classiques** chargés **dans l'ordre** de `index.html`. Les `const`/`let`/`function` de premier niveau sont **partagés entre fichiers** (portée globale du document).
- **Ordre obligatoire** : data → utils → items → generators → state → theme-audio → home → build → keyboard → dnd → session → cours → main. Un fichier peut **appeler** une fonction d'un fichier chargé après lui **uniquement à l'exécution** (clic, etc.), jamais au chargement.
- **Noms interdits pour des fonctions globales** : `history`, `home`, `open`, `close`, `print`, `stop`, `find`, `name`, `status`… (collision avec `window`). C'est pour ça que les vues s'appellent `homeView()` et `historyView()`.
- **Rendu** : chaque vue reconstruit `#app.innerHTML` (template strings). Toujours passer les textes par `esc()` ; l'arabe affiché passe par `showAr()` (respecte la case voyelles) **sauf** dans le Cours/explications/grammaire (texte brut avec harakāt).
- `fmtPrompt(texte)` entoure automatiquement les morceaux arabes d'un `<span class="ar">` (bon sens d'écriture + bonne police) dans un texte français.

### Variables globales principales
| Nom | Fichier | Rôle |
|---|---|---|
| `D`, `SUM` | data | contenu brut |
| `ITEMS` | items.js | toutes les questions : `{id,type,L,…}` — type `w` mot, `p` phrase, `f` forme, `g` grammaire |
| `S` | state.js | réglages : `pick` (`lesson`/`page`), `from,to,mode,dir,diff,count,har,kb,pckb,page,cpage` (`cpage` = dernière page cherchée dans le Cours) |
| `ME` / `GP` / `CUR()` | state.js | profil avec prénom (`null` si aucun) / profil invité / profil utilisé (`ME||GP`) |
| `DB` | state.js | base claude.ai (`null` sur GitHub Pages) |
| `Q, qi, score, errs, streak` | session.js | série en cours |
| `view` | home.js | onglet actif : `train` / `hist` / `cours` |

### Cycle d'une série
`homeView()` → clic **Commencer** → `start(pool())` → `draw()` (tirage) → `build(item)` pour chaque question → `show()` → réponse → `done(q,res,user)` (feedback + « Pourquoi ? » si erreur) → `next()` → `finish()` (anneau de score, historique, « Refaire mes erreurs »).

## 5. Les types de questions

| Item | Facile | Moyen | Difficile |
|---|---|---|---|
| Mot `w` | QCM 6 (sens au hasard ou choisi) | FR→AR : lettres à remettre ; AR→FR : QCM 6 | écrire |
| Phrase `p` | QCM 6 | tuiles de mots (+ pièges) | écrire (tolérance par similarité) |
| Forme `f` (pluriel/duel/féminin) | QCM 6 | lettres | écrire |
| Grammaire `g` | toujours QCM 6 (harakāt toujours visibles) | idem | idem |

- **Pièges** : `distract()` (mots/phrases ressemblants, jamais de traduction qui se chevauche ni d'homographe), `fakeForms()` (faux pluriels/duels), `mutations()` (change la voyelle finale, ajoute/enlève ال), `fillOpts()` complète toujours à 5 mauvaises réponses.
- **Vérification écrite** (`check`) : normalisation sans voyelles ; ال optionnel ; français sans accents/articles, alternatives séparées par `/` ; homographes acceptés si voyelles masquées ; « presque » (0.5) = compté faux mais bouton « J'avais juste ».
- **Grammaire générée** (`generators.js`) : ~2 × le nombre de QCM fixes à chaque série. Chaque générateur a un `min` (leçon minimale). Les catégories `CAT` + `ADJOK` empêchent les phrases absurdes (« rapide » seulement pour véhicule/animal, etc.). Pour ajouter un mot à une catégorie, l'écrire **exactement** comme dans `lessons.js` (avec harakāt et tanwīn).

## 6. Aléatoire et anti-répétition (`session.js`)
- `rnd()` utilise `crypto.getRandomValues` ; `shuf()` = Fisher-Yates.
- `simKey(item)` = « ressemblance » : même mot (dans les deux sens), mot + son pluriel/duel/féminin, homographes, même phrase, même QCM.
- `draw()` prend d'abord des questions **dont la clé n'est pas dans les 40 dernières** ; s'il n'y en a pas assez (peu de leçons), il reprend les plus anciennes.
- `markSeen()` (appelé dans `show()`) mémorise les 40 dernières clés dans `localStorage['m1recent:<profil>']`.

## 7. Stockage
| Clé localStorage | Contenu |
|---|---|
| `m1set` | réglages `S` |
| `m1theme` | `light` / `dark` / absent (= système) |
| `m1me` | dernier prénom utilisé |
| `m1p:<clé>` | profil `{name,key,stats,hist}` |
| `m1p:guest` | profil invité (par défaut) `{name:'',key:'guest',stats,hist}` — `m1stats` = ancienne clé reprise au démarrage |
| `m1recent:<clé>` | 40 dernières questions (`guest` pour invité) |

- Sur **claude.ai** (artefact), `claude.use('db')` donne une base partagée : document `profiles/<clé>`. Sur **GitHub Pages**, `DB = null` → tout reste sur l'appareil (c'est normal, le message l'indique).
- `stats[id] = {r,w}` (bonnes/mauvaises) ; utilisé pour la liste « À retravailler ». Les questions générées ne sont pas comptées.

## 8. Procédure de modification → mise en ligne

1. Modifier les fichiers concernés (contenu : `js/data/*.js` ; style : `css/style.css` ; logique : `js/**`).
2. `node tools/check_data.mjs` (si le contenu a changé).
3. `python3 tools/smoke_test.py` (doit afficher « Tout est OK ✔ »). Chrome : `CHROME=/usr/bin/google-chrome`.
4. Si l'apparence change : faire une capture (Playwright) en **390 px** de large, en **jour et nuit**, et la regarder.
5. `python3 tools/bump_version.py` (sinon les téléphones gardent l'ancienne version en cache).
6. `git add -A && git commit -m "…"` puis `git push origin main` → GitHub Pages se met à jour en 1–2 min.
7. Optionnel : `python3 tools/build_single.py` → `dist/medine-revision.html` (version un seul fichier, ex. pour l'artefact claude.ai `4dd6abd2-6a0b-4933-a9e0-578cc89c3662`). `dist/` n'est pas versionné.
8. Dire à l'utilisateur ce qui a changé, en français simple, et de recharger (Ctrl+F5 / fermer-rouvrir l'onglet). Le numéro de version est visible en bas de page.

## 9. Pièges connus / historique des décisions
- Le dépôt a été **transféré** de `Aiman1080/LaSource` vers `medine-revision/LaSource` : l'app GitHub de Claude doit avoir accès à l'organisation `medine-revision`.
- Les polices viennent de Google Fonts ; si elles ne chargent pas, repli lisible (Scheherazade New, Segoe UI, Arial) — **ne pas** revenir à Amiri (voyelles trop petites).
- Les animations utilisent `#app>*{animation:up}` (spécificité d'ID) : pour une autre animation sur un enfant direct de `#app`, préfixer par `#app` (ex. `#app .qcard.win`).
- `fitOpts()` s'exécute via `requestAnimationFrame` après `show()` et au redimensionnement.
- Le contenu (traductions, règles, résumés) a été rédigé par Claude à partir du livre (PDF scanné, arabe seul) : **à faire relire par l'équipe pédagogique**. Toute correction de l'utilisateur prime.
- **Pourquoi par leçon et pas par page** : dans le livre, le vocabulaire et la grammaire d'une leçon sont présentés au début de la leçon ; les pages suivantes sont surtout des exercices. Le contenu du site est donc rangé par leçon ; une page choisie = « jusqu'à la leçon qui contient cette page ».
- Mots identiques sans voyelles (من، رجل، امام، انت) : gérés (pas utilisés comme pièges entre eux ; les deux traductions acceptées si voyelles masquées).
- Questions générées : elles doivent avoir du **sens** (l'utilisateur a signalé « vers le sac »). Règles en place : `PREPS` (في = lieu/véhicule/contenant, عَلىٰ = surface, مِنْ = lieu, إِلىٰ = lieu/personne), `idafaOk` (`PARTS` : partie → tout, ex. porte → mosquée ; sinon objet/animal → personne), catégories `nature`, `cont`, `surf`, `skip`, `FAMILY` (pas de « deux mères »). Toute nouvelle catégorie de mot doit être rangée dans `CAT`. Vérifier un échantillon (`__gen`) après chaque changement.

## 10. Idées possibles (non faites)
- **Ne pas** mettre le PDF du livre dans le dépôt public (droits d'auteur). À la place : `BOOK_URL` (en haut de `js/ui/cours.js`) = lien vers le PDF hébergé par La Source avec accès réservé (ex. Google Drive partagé aux élèves). Si rempli, chaque leçon du Cours affiche « Ouvrir le livre (pages X–Y) » (`#page=` = page imprimée − 4 pour un lien PDF direct ; pas d'ancre pour Google Drive).
- Choix « version française » pour les numéros de page (nécessite la page de début de chaque leçon dans l'édition FR).
- Tome 2 : même format de données (voir docs/CONTENU.md §7).
- Suivi de classe pour le professeur (nécessiterait une base de données en ligne, ex. Supabase/Firebase).

## 11. Index des fonctions (où trouver quoi)

| Fichier | Contient |
|---|---|
| `core/utils.js` | `$` (querySelector), `app` (#app), `LS.get/set` (localStorage protégé par try/catch), `HAR` (regex harakāt), `stripH`, `nAr` (arabe normalisé : sans voyelles, أإآ→ا, ة→ه, ى→ي, sans ponctuation), `nFr` (français normalisé : minuscules, sans accents ni articles), `esc` (échappement HTML), `rnd`/`shuf`/`pick` (hasard crypto), `lev`/`sim` (similarité 0–1) |
| `core/items.js` | `ITEMS` (id `w5-3` = leçon 5, ligne 3 ; préfixes `w` `p` `f` `g`), `KIND` (pl/du/fe → libellé) |
| `core/generators.js` | morphologie : `stem` (retire tanwīn/voyelle finale), `tStem` (ة→ت), `nom`/`gen`/`genI`/`accI`, `def`/`defN`/`defG` (ajout de ال avec lettres solaires) ; listes `FEM`, `ADJ` [masc, fém, fr, leçon], `COL`, `NOTN` (exclus), `OWN`, `CAT`/`CATS`/`catOf`/`isOpen`, `ADJOK`/`adjFits`/`pairNA`, `ADJBASE`, `NUM_M`/`NUM_F`, `PRON`, `VERB`, `SUF`/`withSuf`, `nouns()`, `mk()` (valide une question générée), `GENS` (liste des générateurs `{min,f(N)}`), `genQ(n)` |
| `core/state.js` | `S`, `save()`, `DB`, `dbState`, `ME`, `GP`, `CUR()`, `keyOf(nom)`, `STATS()`, `persist()` (local + DB), `login(nom)`, `logout()`, `KNOWN`/`loadNames()` |
| `ui/theme-audio.js` | `theme`, `applyTheme()`, `showAr()`, `speak()`, `sayBtn()`, `loadVoices()` (ajoute/retire la classe `noar` sur body) |
| `ui/home.js` | `view`, `tab(v)`, `render()`, `inRange(item)`, `pool()` (items filtrés par leçons + mode), `lessonOpts`, `seg()` (boutons de choix), `DIFF`, `MODE`, `lessonBtn(id,n)`, `pickLesson('from'|'to')`, `profileCard()` (lien discret / ligne « Profil : … · changer »), `wireProfile()`, `heroCard()`, `homeView()`, `historyView()` |
| `quiz/build.js` | `dirPick`, `frSet`, `distract(it,champ,n)`, `fakeForms(it)`, `letterToks(ans)`, `SWAP`/`PART`/`mutations(ok)`, `fillOpts(ok,bad,n,pool)`, `levelFor()`, `build(it)` → objet question `{it,kind,ask,prompt,pAr,ans,target,oAr,opts,toks,six,keepHar,lv,ex}`, `check(q,saisie)` → 1 / 0.5 / 0 |
| `quiz/keyboard.js` | `KB_ROWS`, `KB_EXTRA`, `HARK`, `CODE`/`SCODE` (code physique → lettre arabe, Maj = voyelles), `isTouch`, `insert`, `backspace`, `kbHTML()`, `wireKb(inp,submit)` |
| `quiz/dnd.js` | `dnd(q)` → `{get(),clear()}` (pointer events, tap = ajouter/retirer) |
| `quiz/session.js` | `Q`,`qi`,`score`,`errs`,`answered`,`nAns`,`streak`, `RECENT_N`, `recKey`, `simKey`, `draw(pool,n)`, `markSeen(it)`, `start(P,liste?)`, `rec(it,ok)`, `fitOpts()`, `show()`, `fmtPrompt(txt)`, `done(q,res,saisie)`, `next()`, `finish()` |
| `ui/cours.js` | `CH` (chevron SVG), `pageEnd(L)`, `lessonOfPage(p)`, `lessonBody(L,grammaireOuverte)`, `cours()` (encadré « Aller à une page du livre » : −/+/Voir → ouvre la leçon qui contient la page, avec la grammaire dépliée), `openSheet(n)`, `gloss()`/`GLOSS`, `SUFX`, `glossWord(mot)` (mot à mot), `whyHTML(q)` |
| `main.js` | `APP_VERSION`, démarrage (connexion DB, profil mémorisé `m1me`) |

## 12. Recettes (comment faire…)

**Corriger / ajouter du vocabulaire** → `js/data/lessons.js` (format dans docs/CONTENU.md). Si c'est un nom, l'ajouter à la bonne catégorie de `CAT` (generators.js) pour que les phrases générées restent logiques.

**Ajouter un générateur de grammaire** → dans `GENS` (generators.js) : `{min:LEÇON, f(N){ … return mk(question, bonne, [mauvaises…], explication, leçon, 'code') }}`. Retourner `null` si impossible. ≥ 3 mauvaises réponses (complétées à 5 par `fillOpts`). Tester avec un `window.__gen=(to,n)=>{S.to=to;S.from=1;return genQ(n)}` temporaire dans une copie de test.

**Ajouter un réglage** → valeur par défaut dans `S` (state.js), bouton via `seg('cle',[[valeur,'Libellé'],…])` dans `homeView()`, le clic est déjà géré (`.seg` → `S[k]=…; save(); homeView()`).

**Ajouter un type de question** → `build()` (définir `kind`), rendu dans `show()`, correction dans `done()`/`check()`, libellé de niveau dans `show()` (`lvl`) et ligne du tableau §5.

**Changer les couleurs** → variables `light-dark(clair, sombre)` en haut de `css/style.css` (`--bg --card --ink --mut --tile --tile2 --sand --accent --ok --bad --line --head`). Vérifier le contraste en mode jour.

**Mettre à jour la version claude.ai** → `python3 tools/build_single.py` puis publier `dist/medine-revision.html` comme `index.html` de l'artefact `4dd6abd2-6a0b-4933-a9e0-578cc89c3662` (la capacité `db` y est déclarée).

## 13. Conventions de code
- JS compact (style du projet), sans dépendance. Pas de `alert/confirm/prompt`.
- Toute donnée affichée → `esc()`. L'arabe dans du texte français → `fmtPrompt()`.
- Textes de l'interface en **français**, courts, sans jargon. Termes arabes de grammaire en translittération simple (iḍāfa, tanwīn, harakāt).
- Toujours prévoir le **téléphone** (390 px) : cibles ≥ 44 px, pas de débordement horizontal.
- Respecter `prefers-reduced-motion` pour toute nouvelle animation.
- Commits en français, message clair, avec les lignes d'attribution demandées par la session.

## 14. Notes d'environnement (sandbox Claude)
- Chrome : `/usr/bin/google-chrome` ; Playwright Python installé. Google Fonts est **bloqué** dans le sandbox → les captures utilisent une police de repli (normal).
- Pas d'installation de paquets (réseau limité). `curl` vers github.io ne marche pas : on ne peut pas vérifier le site en ligne, seulement en local (`file://…/index.html`).
- Git : `git -c push.negotiate=true push origin main`. Le remote doit être `https://github.com/medine-revision/LaSource`. Si refus 403 : l'app Claude n'a pas accès à l'organisation → demander à l'utilisateur.
- Ne pas enchaîner `smoke_test.py | grep … && git push` : le `grep` masque l'échec du test. Lancer le test seul, lire « Tout est OK ✔ », puis pousser.
- Dans les tests, une série se termine sur `.rescard` (anneau de score) — pas `.score`.

## 15. Glossaire
- **harakāt** : voyelles brèves (ـَ ـُ ـِ), sukūn (ـْ), shadda (ـّ). **tanwīn** : ـٌ ـٍ ـً (indéfini).
- **iḍāfa** : annexion « le X de Y ». **muḍāf / muḍāf ilayhi** : 1er / 2e nom.
- **diptote** (mamnūʿ min aṣ-ṣarf) : pas de tanwīn, génitif en ـَ.
- **pluriel brisé** : pluriel irrégulier (كِتابٌ → كُتُبٌ).
- **lettres solaires** : ت ث د ذ ر ز س ش ص ض ط ظ ل ن (ال assimilé, shadda).

## 16. Journal des versions (résumé)
| Étape | Contenu |
|---|---|
| v1 | Site de base : 23 leçons, quiz, cours, mode nuit |
| v2 | 3 niveaux, clavier arabe, profils par prénom, grammaire générée |
| v3 | Cours structuré (résumé → grammaire → vocabulaire), « Écouter » masqué sans voix arabe |
| v4 | Identité La Source asbl, logo, explications « Pourquoi ? », animations |
| v5 | Contraste mode jour, QCM 6 choix plus durs, générateur logique, dégradés |
| v6 | Page du livre (−/+/Valider), texte qui ne déborde plus, note version arabe |
| v7 | Harakāt lisibles (Noto Naskh, ≥ 23 px), toujours visibles dans le cours |
| v8 | Tirage 100 % aléatoire + anti-répétition sur 40 questions |
| v9 | Projet découpé en fichiers + documentation + outils de test |
| v10 | Questions générées avec du sens (prépositions, iḍāfa, nature, famille, libellés FR) |
| v11 | Prénom facultatif et discret (lien en bas), historique invité par défaut |
| v12 | Cours : « Aller à une page du livre » + pages de début–fin de chaque leçon |
| v13 | Accueil : bouton Par leçon / Page précise |
| v14 | Titres courts des leçons sous les menus, « Mélangé » en premier |
| v15 | Choix de leçon par liste avec tous les titres visibles avant de choisir |

Ajouter une ligne ici à chaque évolution importante.
