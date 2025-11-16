# Portfolio Professionnel - Barry Mamadou Maladho

Portfolio moderne et professionnel développé avec React, TypeScript, Vite et TailwindCSS. Ce projet présente mes compétences en développement Full-Stack, mes projets réalisés et mes expériences professionnelles.

## 🚀 Technologies utilisées

### Frontend
- **React 18** - Bibliothèque UI moderne
- **TypeScript** - Typage statique pour plus de robustesse
- **Vite** - Build tool ultra-rapide
- **TailwindCSS** - Framework CSS utility-first
- **Framer Motion** - Animations fluides et performantes
- **React Router** - Navigation SPA
- **Lucide React** - Icônes modernes

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web minimaliste
- **Nodemailer** - Envoi d'emails
- **CORS** - Gestion des requêtes cross-origin
- **Dotenv** - Gestion des variables d'environnement

## 📁 Structure du projet

```
Portefolio-MLD/
├── project/              # Application frontend
│   ├── src/
│   │   ├── components/   # Composants réutilisables
│   │   ├── pages/        # Pages de l'application
│   │   ├── hooks/        # Hooks personnalisés
│   │   ├── contexts/     # Contextes React (Theme)
│   │   ├── config/       # Configuration (liens sociaux)
│   │   └── types/        # Types TypeScript
│   └── public/           # Assets statiques
├── back/                 # API backend
│   ├── server.js         # Serveur Express
│   └── .env              # Variables d'environnement (à créer)
└── README.md             # Ce fichier
```

## 🛠️ Installation

### Prérequis
- Node.js (v18 ou supérieur)
- npm ou yarn

### Frontend

1. **Installer les dépendances**
```bash
cd project
npm install
```

2. **Créer le fichier `.env`** (optionnel)
```bash
cp env.example.txt .env
```

Éditez `.env` et ajoutez :
```env
VITE_API_URL=http://localhost:3001
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

### Backend

1. **Installer les dépendances**
```bash
cd back
npm install
```

2. **Créer le fichier `.env`**
```bash
cp env.example.txt .env
```

Éditez `.env` et configurez :
```env
PORT=3001
FRONTEND_URL=http://localhost:5173
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-application
RECEIVER_EMAIL=votre-email@gmail.com
SEND_CONFIRMATION=true
```

3. **Configurer Gmail SMTP**

Pour utiliser Gmail, vous devez :
- Activer la validation en 2 étapes sur votre compte Google
- Créer un mot de passe d'application dans les paramètres de sécurité
- Utiliser ce mot de passe dans `SMTP_PASS` (pas votre mot de passe Gmail normal)

4. **Lancer le serveur**
```bash
npm run dev    # Mode développement (avec rechargement auto)
# ou
npm start      # Mode production
```

Le serveur sera accessible sur `http://localhost:3001`

## 📦 Scripts disponibles

### Frontend (`project/`)
- `npm run dev` - Lance le serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run typecheck` - Vérifie les types TypeScript

### Backend (`back/`)
- `npm start` - Lance le serveur en mode production
- `npm run dev` - Lance le serveur en mode développement (avec watch)

## 🌐 Déploiement

### Frontend
Le frontend peut être déployé sur :
- **Vercel** (recommandé pour React/Vite)
- **Netlify**
- **GitHub Pages**
- Tout hébergeur statique

**Build de production :**
```bash
cd project
npm run build
```

Les fichiers seront générés dans le dossier `dist/`

### Backend
Le backend peut être déployé sur :
- **Heroku**
- **Railway**
- **Render**
- **VPS** (Node.js requis)

**Important :** Configurez les variables d'environnement sur votre plateforme de déploiement.

## 🎨 Fonctionnalités

- ✅ **Design moderne et responsive** - Adapté à tous les écrans
- ✅ **Mode sombre** - Thème clair/sombre avec persistance
- ✅ **Animations fluides** - Transitions et animations avec Framer Motion
- ✅ **SEO optimisé** - Meta tags, Open Graph, Twitter Cards
- ✅ **Performance optimisée** - Code splitting, lazy loading, images optimisées
- ✅ **Accessibilité** - ARIA labels, navigation au clavier
- ✅ **Formulaire de contact fonctionnel** - Envoi d'emails via Nodemailer
- ✅ **Gestion des projets** - Affichage par statut (terminé, en cours, planifié)

## 📄 Pages

- **Accueil** (`/`) - Présentation, statistiques, expertise, références
- **À propos** (`/about`) - Parcours, valeurs, expériences
- **Compétences** (`/skills`) - Compétences techniques et transversales
- **Projets** (`/projects`) - Portfolio de réalisations
- **Contact** (`/contact`) - Formulaire de contact
- **404** - Page d'erreur pour routes non trouvées

## 🔧 Configuration

### Variables d'environnement Frontend
- `VITE_API_URL` - URL de l'API backend (défaut: `http://localhost:3001`)

### Variables d'environnement Backend
- `PORT` - Port du serveur (défaut: `3001`)
- `FRONTEND_URL` - URL du frontend pour CORS (défaut: `http://localhost:5173`)
- `SMTP_USER` - Email Gmail pour l'envoi
- `SMTP_PASS` - Mot de passe d'application Gmail
- `RECEIVER_EMAIL` - Email de réception des messages
- `SEND_CONFIRMATION` - Envoyer une confirmation au client (true/false)

## 📝 Licence

Ce projet est un portfolio personnel. Tous droits réservés.

## 👤 Auteur

**Barry Mamadou Maladho**
- Email: maladhob5@gmail.com
- GitHub: [@Maladho1711](https://github.com/Maladho1711)
- LinkedIn: [maladho-barry-3ba968293](https://www.linkedin.com/in/maladho-barry-3ba968293/)

---

Fait avec ❤️ en utilisant React, TypeScript et TailwindCSS

