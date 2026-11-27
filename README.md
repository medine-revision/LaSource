# La Source asbl — Révision Médine Tome 1

Site gratuit de révision du **Tome 1 de Médine** (vocabulaire + grammaire, français ⇄ arabe) pour les élèves de **La Source asbl** — Science en pratique.

👉 **https://medine-revision.github.io/LaSource/**

## Ce que fait le site
- On choisit **jusqu'à quelle leçon** (ou quelle page du livre, version arabe) on a étudié : rien d'après n'apparaît.
- **3 niveaux** : Facile (6 choix), Moyen (glisser-déposer), Difficile (écrire) — ou Mélangé.
- Mots et phrases, dans les deux sens ; questions de grammaire (fixes + générées).
- Tirage **100 % aléatoire**, sans répéter une question semblable aux 40 dernières.
- Explication à chaque erreur (mot à mot, règle, lien vers la leçon).
- **Cours** : résumé, grammaire, vocabulaire et phrases des 23 leçons.
- Clavier arabe à l'écran (téléphone) et clavier PC converti en arabe.
- Profils par prénom (sans mot de passe) avec historique, mode nuit, fonctionne sur téléphone et PC.

## Structure
```
index.html        page principale
css/style.css     apparence
js/data/          contenu des leçons (à faire relire par l'équipe pédagogique)
js/core|quiz|ui/  fonctionnement du site
tools/            vérifications et outils
docs/CONTENU.md   comment corriger ou ajouter du contenu
CLAUDE.md         documentation technique complète
```

## Corriger le contenu
Voir **docs/CONTENU.md**. Une traduction = une ligne `arabe|français` dans `js/data/lessons.js`.

## Mettre à jour
Chaque push sur la branche `main` met le site à jour en 1–2 minutes (GitHub Pages).

Contenu basé sur *Durūs al-lugha al-ʿarabiyya* du Dr V. Abdur Rahim.
