# Guide de déploiement du backend sur Render

Ce guide vous explique étape par étape comment déployer le backend de votre portfolio sur Render.

## 📋 Prérequis

1. Un compte Render (gratuit) : https://render.com
2. Votre backend est déjà sur GitHub
3. Vos identifiants Gmail SMTP

## 🚀 Étapes de déploiement

### Étape 1 : Se connecter à Render

1. Allez sur https://render.com
2. Cliquez sur **Sign Up** (ou **Log In** si vous avez déjà un compte)
3. Connectez-vous avec votre compte GitHub

### Étape 2 : Créer un nouveau service Web

1. Dans le dashboard Render, cliquez sur **New +**
2. Sélectionnez **Web Service**
3. Connectez votre repository GitHub :
   - Si c'est la première fois, autorisez Render à accéder à vos repos
   - Sélectionnez le repository : `Portefolio_MLD`
   - Cliquez sur **Connect**

### Étape 3 : Configurer le service

Remplissez les champs suivants :

- **Name** : `portfolio-backend` (ou le nom de votre choix)
- **Region** : `Frankfurt` (ou la région la plus proche)
- **Branch** : `main`
- **Root Directory** : `back` ⚠️ **IMPORTANT**
- **Runtime** : `Node`
- **Build Command** : `npm install`
- **Start Command** : `npm start`

### Étape 4 : Configurer les variables d'environnement

Dans la section **Environment Variables**, ajoutez les variables suivantes :

| Clé | Valeur | Description |
|-----|--------|-------------|
| `NODE_ENV` | `production` | Environnement de production |
| `PORT` | `10000` | Port utilisé par Render (ne pas changer) |
| `SMTP_USER` | `maladhob5@gmail.com` | Votre email Gmail |
| `SMTP_PASS` | `ymwovwkjporjpiga` | Votre mot de passe d'application Gmail |
| `RECEIVER_EMAIL` | `maladhob5@gmail.com` | Email qui recevra les messages |
| `SEND_CONFIRMATION` | `true` | Envoyer une confirmation au client |
| `FRONTEND_URL` | `https://votre-site.vercel.app` | ⚠️ **À remplacer par votre URL Vercel** |

⚠️ **Important** : Remplacez `https://votre-site.vercel.app` par l'URL réelle de votre frontend déployé sur Vercel.

### Étape 5 : Choisir un plan

- Sélectionnez le plan **Free** (gratuit)
- ⚠️ **Note** : Le plan gratuit met le service en veille après 15 minutes d'inactivité. Le premier démarrage peut prendre 30-60 secondes.

### Étape 6 : Déployer

1. Cliquez sur **Create Web Service**
2. Render va automatiquement :
   - Cloner votre repository
   - Installer les dépendances (`npm install`)
   - Démarrer le serveur (`npm start`)
3. Attendez que le déploiement soit terminé (environ 2-3 minutes)

### Étape 7 : Récupérer l'URL du backend

Une fois le déploiement terminé, vous verrez :
- **Status** : `Live` (en vert)
- **URL** : `https://portfolio-backend-xxxx.onrender.com` (exemple)

⚠️ **Copiez cette URL**, vous en aurez besoin pour configurer le frontend.

## 🔧 Configuration du frontend

Après avoir déployé le backend, vous devez mettre à jour l'URL de l'API dans le frontend.

### Option 1 : Variable d'environnement (Recommandé)

1. Dans votre projet Vercel, allez dans **Settings** > **Environment Variables**
2. Ajoutez une nouvelle variable :
   - **Name** : `VITE_API_URL`
   - **Value** : `https://portfolio-backend-xxxx.onrender.com` (l'URL de votre backend Render)
3. Redéployez votre frontend

### Option 2 : Modifier directement le code

Modifiez `project/src/pages/Contact.tsx` :

```typescript
const API_URL = import.meta.env.VITE_API_URL || 'https://portfolio-backend-xxxx.onrender.com';
```

Puis redéployez sur Vercel.

## ✅ Vérification

1. Testez le formulaire de contact sur votre site
2. Vérifiez que vous recevez bien l'email
3. Vérifiez les logs dans Render pour voir s'il y a des erreurs

## 🔍 Dépannage

### Le service ne démarre pas

- Vérifiez les logs dans Render
- Assurez-vous que `rootDir` est bien défini à `back`
- Vérifiez que `package.json` contient bien le script `start`

### Erreur CORS

- Vérifiez que `FRONTEND_URL` dans Render correspond exactement à votre URL Vercel
- Assurez-vous qu'il n'y a pas de `/` à la fin de l'URL

### Erreur d'envoi d'email

- Vérifiez que `SMTP_USER` et `SMTP_PASS` sont corrects
- Vérifiez que le mot de passe d'application Gmail est valide

### Le service est en veille (plan gratuit)

- Le premier démarrage après une période d'inactivité peut prendre 30-60 secondes
- C'est normal avec le plan gratuit de Render

## 📝 Notes importantes

1. **Plan gratuit Render** :
   - Le service se met en veille après 15 minutes d'inactivité
   - Le premier démarrage peut être lent (30-60 secondes)
   - Pour un service toujours actif, passez au plan payant

2. **Sécurité** :
   - Ne commitez jamais votre fichier `.env` sur GitHub
   - Utilisez toujours les variables d'environnement dans Render

3. **Mise à jour** :
   - Chaque push sur `main` déclenchera automatiquement un redéploiement
   - Vous pouvez aussi déclencher un redéploiement manuel depuis le dashboard Render

## 🎉 Félicitations !

Votre backend est maintenant déployé sur Render et connecté à votre frontend Vercel !

