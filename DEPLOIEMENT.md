# Guide de Déploiement - Portfolio MLD

Ce guide vous explique comment déployer le portfolio sur GitHub, Vercel (frontend) et Render (backend).

## 📋 Prérequis

- Compte GitHub
- Compte Vercel (gratuit)
- Compte Render (gratuit)
- Git installé sur votre machine

---

## 🚀 Étape 1 : Préparer le projet pour GitHub

### 1.1 Initialiser Git (si pas déjà fait)

```bash
cd C:\Users\apprenant\Desktop\Portefolio-MLD
git init
```

### 1.2 Ajouter tous les fichiers

```bash
git add .
git commit -m "Initial commit: Portfolio professionnel avec backend"
```

### 1.3 Créer un repository sur GitHub

1. Allez sur [GitHub](https://github.com)
2. Cliquez sur "New repository"
3. Nommez-le (ex: `portfolio-mld`)
4. Ne cochez PAS "Initialize with README"
5. Cliquez sur "Create repository"

### 1.4 Connecter le projet local à GitHub

```bash
git remote add origin https://github.com/VOTRE_USERNAME/portfolio-mld.git
git branch -M main
git push -u origin main
```

---

## 🌐 Étape 2 : Déployer le Frontend sur Vercel

### 2.1 Préparer le projet

1. Vérifiez que `project/package.json` contient le script `build` :
```json
"scripts": {
  "build": "vite build"
}
```

2. Créez un fichier `project/vercel.json` (optionnel, pour la configuration) :
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite"
}
```

### 2.2 Déployer via Vercel

**Option A : Via l'interface Vercel (Recommandé)**

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez votre compte GitHub
3. Cliquez sur "Add New Project"
4. Importez votre repository `portfolio-mld`
5. Configurez :
   - **Root Directory** : `project`
   - **Framework Preset** : Vite
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`
6. Ajoutez les variables d'environnement :
   - `VITE_API_URL` : L'URL de votre backend Render (vous l'obtiendrez après le déploiement du backend)
7. Cliquez sur "Deploy"

**Option B : Via Vercel CLI**

```bash
npm i -g vercel
cd project
vercel
```

### 2.3 Configuration des variables d'environnement

Dans Vercel, allez dans **Settings > Environment Variables** et ajoutez :
- `VITE_API_URL` = `https://votre-backend.onrender.com` (à remplacer après déploiement du backend)

---

## 🔧 Étape 3 : Déployer le Backend sur Render

### 3.1 Préparer le backend

1. Vérifiez que `back/package.json` contient :
```json
{
  "scripts": {
    "start": "node server.js"
  }
}
```

2. Créez un fichier `back/render.yaml` (optionnel) :
```yaml
services:
  - type: web
    name: portfolio-backend
    env: node
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 10000
```

### 3.2 Déployer sur Render

1. Allez sur [render.com](https://render.com)
2. Créez un compte (ou connectez-vous)
3. Cliquez sur "New +" > "Web Service"
4. Connectez votre repository GitHub
5. Sélectionnez votre repository `portfolio-mld`
6. Configurez :
   - **Name** : `portfolio-backend` (ou autre nom)
   - **Root Directory** : `back`
   - **Environment** : `Node`
   - **Build Command** : `npm install`
   - **Start Command** : `npm start`
7. Ajoutez les variables d'environnement :
   - `PORT` : `10000` (Render utilise le port 10000)
   - `FRONTEND_URL` : L'URL de votre frontend Vercel (ex: `https://votre-portfolio.vercel.app`)
   - `SMTP_USER` : Votre email Gmail
   - `SMTP_PASS` : Votre mot de passe d'application Gmail
   - `RECEIVER_EMAIL` : Votre email de réception
   - `SEND_CONFIRMATION` : `true`
8. Cliquez sur "Create Web Service"

### 3.3 Mettre à jour le frontend

Une fois le backend déployé, récupérez son URL (ex: `https://portfolio-backend.onrender.com`) et :

1. Allez dans Vercel > Settings > Environment Variables
2. Mettez à jour `VITE_API_URL` avec l'URL de votre backend Render
3. Redéployez le frontend (Vercel le fera automatiquement si vous avez activé les déploiements automatiques)

---

## ✅ Vérification

### Frontend (Vercel)
- ✅ Le site est accessible
- ✅ Les pages se chargent correctement
- ✅ Le formulaire de contact fonctionne

### Backend (Render)
- ✅ L'endpoint `/api/health` répond : `https://votre-backend.onrender.com/api/health`
- ✅ Le formulaire de contact envoie des emails

---

## 🔄 Mises à jour futures

### Mettre à jour le code

```bash
git add .
git commit -m "Description des modifications"
git push origin main
```

Vercel et Render déploieront automatiquement les nouvelles versions.

---

## 📝 Notes importantes

1. **CORS** : Le backend est configuré pour accepter les requêtes depuis votre frontend Vercel
2. **Variables d'environnement** : Ne jamais commiter les fichiers `.env`
3. **Rate Limiting** : Le backend limite à 5 requêtes par IP toutes les 15 minutes
4. **Gmail SMTP** : Utilisez un mot de passe d'application, pas votre mot de passe Gmail normal

---

## 🆘 Dépannage

### Le frontend ne peut pas contacter le backend
- Vérifiez que `VITE_API_URL` dans Vercel pointe vers l'URL correcte de Render
- Vérifiez que `FRONTEND_URL` dans Render correspond à l'URL de Vercel
- Vérifiez les logs dans Render pour voir les erreurs

### Le backend ne démarre pas
- Vérifiez que toutes les variables d'environnement sont définies dans Render
- Vérifiez les logs dans Render Dashboard

### Les emails ne sont pas envoyés
- Vérifiez que `SMTP_USER` et `SMTP_PASS` sont corrects
- Vérifiez que vous utilisez un mot de passe d'application Gmail
- Vérifiez les logs du backend dans Render

---

Bon déploiement ! 🚀

