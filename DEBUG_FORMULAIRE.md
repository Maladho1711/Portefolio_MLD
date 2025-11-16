# Guide de débogage - Formulaire de contact

## 🔍 Étapes de diagnostic

### 1. Vérifier la console du navigateur

1. Ouvrez votre site : `https://portefolio-mld.vercel.app`
2. Allez sur la page Contact
3. Ouvrez la console (F12 ou Clic droit → Inspecter → Console)
4. Remplissez et envoyez le formulaire
5. Regardez les erreurs dans la console

**Erreurs possibles :**
- `Failed to fetch` → Problème de connexion au backend
- `CORS error` → Problème de configuration CORS
- `500 Internal Server Error` → Erreur côté serveur
- `Timeout` → Le serveur met trop de temps à répondre

### 2. Vérifier l'onglet Network

1. Dans la console, allez dans l'onglet **Network** (Réseau)
2. Filtrez par **Fetch/XHR**
3. Envoyez le formulaire
4. Cliquez sur la requête `contact` ou `api/contact`
5. Regardez :
   - **Status** : doit être 200 (succès) ou 400/500 (erreur)
   - **Request URL** : doit être `https://portfolio-backend-uhfa.onrender.com/api/contact`
   - **Request Payload** : doit contenir name, email, phone, message
   - **Response** : doit contenir `{"success": true}` ou un message d'erreur

### 3. Vérifier les logs Render

1. Allez sur https://dashboard.render.com
2. Ouvrez votre service `portfolio-backend`
3. Cliquez sur **Logs**
4. Envoyez le formulaire depuis votre site
5. Regardez les logs pour voir :
   - Si la requête arrive au serveur
   - Les erreurs éventuelles
   - Les messages de validation

**Messages à chercher :**
- `POST /api/contact` → La requête est reçue
- `Erreur lors de l'envoi de l'email` → Problème avec Nodemailer
- `Variables d'environnement manquantes` → Configuration manquante

### 4. Tester l'API directement

Utilisez curl ou Postman pour tester l'API :

```bash
curl -X POST https://portfolio-backend-uhfa.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "message": "Message de test"
  }'
```

**Réponse attendue :**
```json
{"success": true, "message": "Message envoyé avec succès"}
```

### 5. Vérifier les variables d'environnement

**Dans Render :**
- `SMTP_USER` : maladhob5@gmail.com
- `SMTP_PASS` : ymwovwkjporjpiga
- `FRONTEND_URL` : https://portefolio-mld.vercel.app

**Dans Vercel :**
- `VITE_API_URL` : https://portfolio-backend-uhfa.onrender.com

### 6. Vérifier CORS

Le backend doit autoriser votre domaine Vercel. Vérifiez que `FRONTEND_URL` dans Render correspond exactement à votre URL Vercel (sans `/` à la fin).

## 🐛 Problèmes courants

### Le formulaire reste bloqué sur "Envoi en cours"

**Causes possibles :**
1. Le backend est en veille (plan gratuit Render)
2. Timeout trop long
3. Erreur silencieuse

**Solution :**
- Attendez 30-60 secondes puis réessayez
- Vérifiez les logs Render
- Vérifiez la console du navigateur

### Erreur CORS

**Message :** `Access to fetch at '...' has been blocked by CORS policy`

**Solution :**
- Vérifiez que `FRONTEND_URL` dans Render correspond exactement à votre URL Vercel
- Pas de `/` à la fin de l'URL
- Redéployez Render après modification

### Erreur 500

**Message :** `Erreur serveur (500)`

**Causes possibles :**
1. Problème avec Nodemailer (mauvais identifiants SMTP)
2. Variables d'environnement manquantes
3. Erreur dans le code serveur

**Solution :**
- Vérifiez les logs Render pour voir l'erreur exacte
- Vérifiez que `SMTP_USER` et `SMTP_PASS` sont corrects
- Vérifiez que le mot de passe d'application Gmail est valide

### Erreur de timeout

**Message :** `Le serveur met trop de temps à répondre`

**Causes possibles :**
1. Le backend Render est en veille (plan gratuit)
2. Le serveur met du temps à démarrer

**Solution :**
- Attendez 30-60 secondes puis réessayez
- Faites un déploiement manuel dans Render pour réveiller le service

## ✅ Checklist de vérification

- [ ] La console du navigateur ne montre pas d'erreurs
- [ ] L'onglet Network montre une requête avec status 200
- [ ] Les logs Render montrent que la requête est reçue
- [ ] Les variables d'environnement sont correctes
- [ ] Le health check fonctionne : `https://portfolio-backend-uhfa.onrender.com/api/health`
- [ ] `FRONTEND_URL` correspond exactement à l'URL Vercel
- [ ] `VITE_API_URL` est configurée dans Vercel

## 📞 Informations à me donner

Si le problème persiste, donnez-moi :
1. Les erreurs de la console du navigateur
2. Le status de la requête dans l'onglet Network
3. Les logs Render (dernières lignes)
4. Le message d'erreur affiché sur le formulaire

