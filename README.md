HRnet - Application de gestion des employés
===========================================

Bienvenue dans HRnet, une application React permettant de gérer les dossiers des employés au sein d'une entreprise. 
Ce projet a été réalisé par Aïssa Henni dans le cadre de la formation OpenClassrooms (parcours Développeur Front-End).

Installation et lancement
--------------------------

1. Cloner le projet :
```bash
git clone https://github.com/Asma-A-S/HRnet-projet-14.git
cd hrnet-react
```


2. Installer les dépendances :
```
   npm install
```
3. Lancer l'application en mode développement :
```   
   npm run dev
```
4. Créer un build de production :
```
   npm run build
   npm run preview
```
6. Servir la version de production localement :
```   
   npm install -g serve
   serve -s dist
```
7. Vider la liste des emplyées 

```
localStorage.removeItem('employees')
window.location.reload()
```
Fonctionnalités principales
---------------------------

- Création de nouveaux employés via un formulaire dynamique
- Affichage de la liste des employés sous forme de tableau avec recherche, tri et pagination
- Modale personnalisée pour confirmation de création
- Sauvegarde des données dans le localStorage
- Optimisation des performances et accessibilité

Stack technique
---------------

- React
- React Router
- Redux Toolkit
- Vite
- CSS
- Lighthouse pour les audits de performance
- ESLint / Prettier pour la qualité du code

Audits Lighthouse
------------------

Les audits ont été réalisés avec l’outil Lighthouse dans Chrome DevTools, sur la version build de l'application.

| Audit       | Score |
| ----------- | ----- |
| Performance | 100   |

Les rapports sont disponibles dans le dossier `/docs/lighthouse-reports`.

Améliorations apportées
------------------------

- Remplacement du plugin jQuery DataTables par un composant React personnalisé
- Remplacement du plugin jQuery de date par `<input type='date'>`
- Remplacement des menus déroulants jQuery par `<select>` HTML natif
- Création et publication d’un plugin Modal React réutilisable sur npm
