# Ajouter votre photo de profil

Pour ajouter votre photo de profil sur la page d'accueil :

1. Placez votre photo dans ce dossier (`src/assets/images/`)
2. Nommez-la `profile.jpg` ou `profile.png` (ou tout autre nom)
3. Modifiez le composant `ProfilePhoto` dans `src/components/ProfilePhoto.tsx` :
   - Remplacez `src` par le chemin vers votre image
   - Exemple : `src="/src/assets/images/profile.jpg"`

Ou modifiez directement dans `src/pages/Home.tsx` :
```tsx
<ProfilePhoto size="xl" src="/src/assets/images/profile.jpg" />
```

**Recommandations pour la photo :**
- Format : JPG ou PNG
- Taille recommandée : 800x800px minimum
- Fond : Photo professionnelle avec fond neutre ou transparent
- Qualité : Haute résolution pour un rendu optimal

