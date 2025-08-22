# FoodieApp

FoodieApp est une application web développée avec **React** et **Vite** permettant de découvrir des restaurants, consulter leurs menus et gérer un panier de commandes.

## Fonctionnalités

- Affichage d'une liste de restaurants avec leurs détails
- Consultation du menu de chaque restaurant
- Ajout et suppression de plats dans le panier
- Calcul automatique du total du panier
- Interface responsive et moderne

## Installation

1. Clone le projet :
   ```bash
   git clone <url-du-repo>
   ```
2. Installe les dépendances :
   ```bash
   npm install
   ```
3. Configure la clé API RapidAPI dans le fichier `.env` :
   ```
   VITE_RAPIDAPI_KEY=ta_clé_api
   ```
4. Lance le serveur de développement :
   ```bash
   npm run dev
   ```

## Scripts disponibles

- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Génère la version de production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Analyse le code avec ESLint

## Structure du projet

- `src/components` : Composants réutilisables (Navbar, Footer, Panier, etc.)
- `src/pages` : Pages principales (Accueil, Détails du restaurant)
- `src/features` : Slices Redux pour la gestion d'état
- `src/store` : Configuration du store Redux

## Technologies utilisées

- React
- Redux Toolkit
- Vite
- Axios
- React Router
- Sonner (notifications)
- RapidAPI (Yelp Business API)

## Auteur

Projet réalisé dans le cadre du Bootcamp Simplon.

---

N'hésite pas à contribuer ou à signaler des problèmes