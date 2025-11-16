# 🚀 Guide Rapide - Push vers GitHub

## Étape 1 : Créer le repository sur GitHub

1. Allez sur [github.com](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"+"** en haut à droite > **"New repository"**
3. Remplissez :
   - **Repository name** : `portfolio-mld` (ou un autre nom)
   - **Description** : "Portfolio professionnel - Frontend React + Backend Node.js"
   - **Visibility** : Public ou Private (votre choix)
   - ⚠️ **NE COCHEZ PAS** "Add a README file"
   - ⚠️ **NE COCHEZ PAS** "Add .gitignore"
   - ⚠️ **NE COCHEZ PAS** "Choose a license"
4. Cliquez sur **"Create repository"**

## Étape 2 : Connecter votre projet local à GitHub

Ouvrez PowerShell ou Terminal dans le dossier du projet et exécutez :

```powershell
# Vérifier que vous êtes dans le bon dossier
cd C:\Users\apprenant\Desktop\Portefolio-MLD

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit: Portfolio professionnel avec backend"

# Renommer la branche en main (si nécessaire)
git branch -M main

# Ajouter le remote GitHub (remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE_USERNAME/portfolio-mld.git

# Pousser vers GitHub
git push -u origin main
```

**Important** : Remplacez `VOTRE_USERNAME` par votre vrai nom d'utilisateur GitHub dans la commande `git remote add origin`.

## Étape 3 : Vérifier

Allez sur votre repository GitHub, vous devriez voir tous vos fichiers !

---

## 🔄 Pour les prochaines mises à jour

```powershell
git add .
git commit -m "Description de vos modifications"
git push origin main
```

---

## ⚠️ Si vous avez des erreurs

### Erreur : "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/VOTRE_USERNAME/portfolio-mld.git
```

### Erreur : "Authentication failed"
- Utilisez un Personal Access Token au lieu de votre mot de passe
- Ou configurez SSH : https://docs.github.com/en/authentication/connecting-to-github-with-ssh

