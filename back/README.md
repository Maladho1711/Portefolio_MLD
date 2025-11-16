# Backend API - Formulaire de Contact

Ce serveur backend gère l'envoi d'emails via le formulaire de contact du portfolio.

## Installation

1. Installez les dépendances :
```bash
cd back
npm install
```

## Configuration

1. Créez un fichier `.env` à la racine du dossier `back` :

```env
# Configuration du serveur
PORT=3001

# URL du frontend (pour CORS)
FRONTEND_URL=http://localhost:5173

# Configuration Gmail
EMAIL_USER=votre-email@gmail.com
EMAIL_PASS=votre-mot-de-passe-application

# Envoyer un email de confirmation au client (true/false)
SEND_CONFIRMATION=true
```

## Configuration Gmail

### Étape 1 : Activer la validation en 2 étapes
1. Allez sur https://myaccount.google.com/
2. Cliquez sur **Sécurité**
3. Activez la **Validation en 2 étapes** si ce n'est pas déjà fait

### Étape 2 : Créer un mot de passe d'application
1. Toujours dans **Sécurité**, allez dans **Mots de passe des applications**
2. Sélectionnez **Autre (nom personnalisé)**
3. Entrez un nom (ex: "Portfolio Contact")
4. Cliquez sur **Générer**
5. **Copiez le mot de passe généré** (16 caractères) - c'est ce que vous mettrez dans `EMAIL_PASS`

⚠️ **Important** : Utilisez le mot de passe d'application généré, PAS votre mot de passe Gmail normal.

## Démarrage

### Mode développement (avec rechargement automatique)
```bash
npm run dev
```

### Mode production
```bash
npm start
```

Le serveur démarrera sur `http://localhost:3001`

## API Endpoints

### POST /api/contact
Envoie un email de contact.

**Body:**
```json
{
  "name": "Nom du client",
  "email": "email@exemple.com",
  "phone": "+224 623 436 513",
  "message": "Message du client"
}
```

**Note:** Le champ `phone` est optionnel.

**Réponse succès:**
```json
{
  "success": true,
  "message": "Message envoyé avec succès"
}
```

**Réponse erreur:**
```json
{
  "success": false,
  "error": "Message d'erreur"
}
```

## Variables d'environnement

- `PORT` : Port du serveur (défaut: 3001)
- `FRONTEND_URL` : URL du frontend pour CORS
- `EMAIL_USER` : Votre adresse Gmail
- `EMAIL_PASS` : Mot de passe d'application Gmail
- `SEND_CONFIRMATION` : Envoyer un email de confirmation au client (true/false)

