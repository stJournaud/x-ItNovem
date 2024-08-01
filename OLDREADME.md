# Exercice technique

Cet exercice doit de servir de base de discussion pour un échange technique avec les équipes d'ITNOVEM.

### Objectif de l'exercice

Le dossier ci-joint contient un fichier nommé `objets-trouves-restitution.csv` . Ce fichier est issu de l'Open Data SNCF et contient une liste d'objets trouvés des différentes gares SNCF.
Le but de l'exercice est de mettre à disposition les deux routes API HTTP suivantes : 

 - `/download` : cette route permettra à un utilisateur de télécharger le fichier
 - `/:uic` : cette route prend en paramètre le code `uic` d'une gare (présent comme une colonne du fichier) et retourne la liste des objets trouvés pour cette gare

> **Précisions**
> - On imagine pour l'exercice, que cette application doit aller en **production**, et pouvoir être maintenue par une équipe de développement.
> - Pour des besoins pratiques, le fichier proposé pèse 20Mo, mais pour la solution attendue, on considèrera qu'il peut s'agir d'un fichier pesant jusqu'à **5Go**.

### Mise en place

L'exercice nécessite d'avoir [NodeJS](https://nodejs.org/fr) d'installé sur son poste.

Installation des dépendances 

```sh
npm install
```

Build

```sh
npm run build
```

Démarrage

```sh
npm start
```

Le dossier joint contient une configuration minimale pour le démarrage de l'exercice. A l'issue de ces trois étapes, le message `Hello world !` devrait s'afficher

### Utilisations de bibliothèques

Pour la partie HTTP, les bibliothèques [express](https://expressjs.com/fr/) ou [Nestjs](https://nestjs.com/) pourront être utilisées si besoin, mais sans obligation compte tenu de la simplicité du problème.

Tout autre bibliothèque pourra être utilisée dans la mesure où son utilisation est pertinente pour l'exercice.
