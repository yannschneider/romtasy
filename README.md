# Romantasy Tracker — version app (PWA)

Ce dossier transforme le site en application installable sur Android (et iOS/desktop).
Ce n'est pas un fichier .apk — c'est une "Progressive Web App" : une fois hébergée,
Chrome propose de l'installer comme une vraie appli (icône sur l'écran d'accueil,
plein écran, sans barre d'adresse).

## Pourquoi il faut l'héberger (pas juste ouvrir le fichier)

Android/Chrome n'autorise l'installation en appli que pour un site servi en HTTPS —
pas pour un fichier ouvert directement (`file://`). Il faut donc le mettre en ligne,
gratuitement, en 5 minutes :

### Option la plus simple : GitHub Pages
1. Crée un compte GitHub (gratuit) si tu n'en as pas.
2. Crée un nouveau dépôt, et mets-y les 4 fichiers de ce dossier
   (`index.html`, `manifest.json`, `service-worker.js`, et le dossier `icons/`).
3. Dans les paramètres du dépôt → "Pages", active GitHub Pages sur la branche
   principale.
4. Ton site est en ligne à une adresse du type
   `https://tonpseudo.github.io/nom-du-depot/`.

### Alternative : Netlify
1. Va sur [netlify.com](https://netlify.com), crée un compte gratuit.
2. Glisse-dépose ce dossier entier sur leur page "Deploy manually".
3. Netlify te donne une URL en HTTPS immédiatement.

Aucune des deux options ne demande de carte bancaire.

## Installer l'appli sur Android

1. Ouvre l'URL de ton site hébergé dans **Chrome** sur ton téléphone Android.
2. Un bandeau "Ajouter à l'écran d'accueil" / "Installer l'application" devrait
   apparaître automatiquement. Sinon : menu ⋮ (trois points en haut à droite)
   → "Installer l'application" (ou "Ajouter à l'écran d'accueil").
3. Une icône apparaît sur ton écran d'accueil, comme une appli classique.
   En l'ouvrant, le site se lance en plein écran, sans barre de navigateur.

## Ce que ça fait (et ne fait pas)

- ✅ Icône sur l'écran d'accueil, ouverture en plein écran
- ✅ Chargement plus rapide au second lancement (le "squelette" de la page
  — HTML/CSS/JS/icônes — est mis en cache)
- ✅ Toutes les fonctionnalités du site (recherche, filtres, liens Booknode/
  Amazon/Leboncoin/Vinted) fonctionnent normalement
- ❌ Les données des livres elles-mêmes (Open Library) ne sont PAS mises en
  cache — il faut une connexion internet à chaque ouverture pour voir les
  nouveautés, exactement comme le site web
- ❌ Ce n'est pas un fichier .apk et ça n'apparaît pas sur le Play Store —
  c'est une appli web installée localement dans Chrome
