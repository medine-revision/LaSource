# Format du contenu (js/data/)

Tout le contenu pédagogique est dans **deux fichiers** :

- `js/data/lessons.js` → `const D = [ … ]` : une entrée par leçon.
- `js/data/summaries.js` → `const SUM = { … }` : le résumé de chaque leçon (onglet Cours).

Après toute modification : `node tools/check_data.mjs`.

---

## 1. Une leçon

```js
{n:5, p:27, t:"L'annexion (iḍāfa)",
 w:`…`,   // vocabulaire
 ph:`…`,  // phrases
 f:`…`,   // formes (pluriel, duel, féminin) — facultatif
 g:[ … ], // règles de grammaire (onglet Cours + explications)
 q:[ … ]} // questions de grammaire écrites à la main (QCM)
```

| Champ | Signification |
|---|---|
| `n` | numéro de la leçon (1, 2, 3… sans trou) |
| `p` | page de **début** de la leçon dans la **version arabe** du livre |
| `t` | titre complet (onglet Cours, peut contenir de l'arabe) |
| `s` | titre **court** pour l'accueil (menus, carte Salam) : surtout en français, un seul mot arabe au plus |

## 2. Vocabulaire `w` et phrases `ph`

Une ligne = un élément, **arabe** puis `|` puis **français**.

```
كِتابٌ|livre
قَلَمٌ|stylo/crayon/plume
```

- Écrire l'arabe **avec toutes les harakāt** (et le tanwīn pour les noms indéfinis).
- Plusieurs traductions acceptées → séparées par `/`. La **première** est la traduction principale.
- Une précision entre parenthèses est affichée mais ignorée à la correction : `grand (de taille)`.
- Les phrases suivent le même format : `هٰذا كِتابٌ.|C'est un livre.`

## 3. Formes `f`

`singulier|forme|traduction|type` avec type = `pl` (pluriel), `du` (duel), `fe` (féminin).

```
كِتابٌ|كُتُبٌ|livre|pl
سَيّارَةٌ|سَيّارَتانِ|voiture|du
أَحْمَرُ|حَمْراءُ|rouge|fe
```

## 4. Grammaire

### Règles `g` (affichées dans le Cours)
```js
["Titre de la règle", "Explication (HTML simple autorisé : <b>, <table class=cj>…)", [["exemple arabe", "traduction"], …]]
```

### Questions `q` (QCM)
```js
["Question en français", "BONNE réponse", "faux 1", "faux 2", "faux 3", "Explication affichée après la réponse"]
```
- Le site complète automatiquement jusqu'à **6 choix** (pièges générés).
- Les 4 options écrites doivent être **différentes**.
- Si une forme au féminin/pluriel pourrait aussi être juste, préciser dans la question (ex. « (des hommes) »).

## 5. Résumés `SUM`

```js
5:"Phrase d'introduction.|Point à retenir 1|Point à retenir 2|Point 3",
```
Séparateur `|`. L'arabe est détecté automatiquement et affiché avec ses voyelles.

## 6. Ajouter un mot / corriger une traduction
1. Trouver la leçon dans `lessons.js` (chercher le mot).
2. Modifier la ligne. Garder le format `arabe|français`.
3. Si c'est un **nom** utilisé par le générateur de grammaire, vérifier sa catégorie dans `js/core/generators.js` (`CAT`) — sinon il est traité comme un objet.
4. `node tools/check_data.mjs`, puis la procédure de publication (CLAUDE.md §8).

## 7. Ajouter le Tome 2 (piste)
Le plus simple : copier le projet, remplacer `D` et `SUM` par le contenu du Tome 2 (même format), adapter les listes du générateur (`ADJ`, `CAT`, `PRON`, `VERB`, `SUF`, nombres) et le titre dans `index.html`.
