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
5. **Trois niveaux** : Facile (6 choix), Moyen (glisser-déposer mots/lettres), Difficile (écrire), + Mélangé.
6. **Harakāt toujours visibles** dans le Cours, les résumés, les explications et les options de grammaire. La case « Afficher les voyelles » ne concerne **que** les questions de mots/phrases du quiz.
7. **Lisibilité de l'arabe** : police Noto Naskh Arabic, jamais sous 23 px dans les réponses, interligne ≈ 1.9–2 (sinon les voyelles sont coupées).
8. **Aucun texte ne doit déborder** d'un bouton : `fitOpts()` réduit la taille puis passe à la ligne.
9. **Design** : couleurs de La Source (bleu nuit `#17223a`, bleu `#4fa6ee`), dégradés doux. **Pas de motifs/symboles** (étoiles, vagues : refusés par l'utilisateur). Mode jour **bien contrasté** + mode nuit.
10. **Pages** : les numéros de page sont ceux de la **version arabe d'origine**. La version française (même auteur, mêmes leçons) a d'autres pages → conseiller de choisir la leçon. Note courte uniquement.
11. **Choix de page** : boutons −/+ et flèches **sans recharger**, application seulement via **Valider** (ou Entrée).
12. Toujours **pousser sur `main`** après une modification demandée (l'utilisateur veut voir la dernière version en ligne directement).

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
| `S` | state.js | réglages : `from,to,mode,dir,diff,count,har,kb,pckb,page` |
| `ME` | state.js | profil courant `{name,key,stats,hist}` ou `null` (invité) |
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
| `m1stats` | stats invité |
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
- Mots identiques sans voyelles (من، رجل، امام، انت) : gérés (pas utilisés comme pièges entre eux ; les deux traductions acceptées si voyelles masquées).
- Questions générées : grammaticalement justes mais combinaisons au hasard → garder les catégories à jour si on ajoute du vocabulaire.

## 10. Idées possibles (non faites)
- Choix « version française » pour les numéros de page (nécessite la page de début de chaque leçon dans l'édition FR).
- Tome 2 : même format de données (voir docs/CONTENU.md §7).
- Suivi de classe pour le professeur (nécessiterait une base de données en ligne, ex. Supabase/Firebase).
