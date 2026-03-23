# Clés à régénérer — Audit sécurité 23/03/2026

Les clés suivantes ont été exposées publiquement sur GitHub.
Même si les repos sont maintenant privés et les nouveaux repos nettoyés,
ces clés doivent être considérées comme compromises et régénérées.

---

## CRITIQUE — À faire immédiatement

### 1. Mot de passe Apple Sandbox
- **Valeur exposée :** `Daniel2904?!`
- **Compte :** `contact@butterguide.com`
- **Où changer :** Apple Developer → App Store Connect → Sandbox Testers
- **Action :** Changer le mot de passe ET vérifier que ce mot de passe n'est utilisé nulle part ailleurs (email, comptes perso, etc.)

### 2. RevenueCat API Key
- **Valeur exposée :** `appl_vCOEzegrvzxXKMlxzOYmnioNljo`
- **Où changer :** https://app.revenuecat.com → Project Settings → API Keys
- **Action :** Générer une nouvelle clé, mettre à jour dans le code Butter via `--dart-define`

### 3. Firebase API Key
- **Valeur exposée :** `AIzaSyBNUj-dWcRN19k4jQ_OrZS722LmL1tCBd4`
- **Projet :** `butter-vdef`
- **Où changer :** https://console.firebase.google.com → Project Settings → API Keys (ou via Google Cloud Console → APIs & Services → Credentials)
- **Action :** Restreindre la clé existante (par app/domaine) ou en créer une nouvelle. Mettre à jour GoogleService-Info.plist (livré via CI, pas dans le repo)

---

## HAUTE PRIORITÉ

### 4. Amplitude API Key
- **Valeur exposée :** `ae4da6af09716face4bb7ecd5d22da17`
- **Où changer :** https://analytics.amplitude.com → Settings → Projects → API Key
- **Action :** Régénérer la clé, mettre à jour dans le code via `--dart-define`

### 5. Stripe Test Key (CodeSphere)
- **Valeur exposée :** `pk_test_51PuORi2KIj2nivFxkySNKXeLFuV0MV0qgQJ7kvTjLHSWQvfimd4QasOa1AamBuKG8jt56DgGbQHDpdLZ0HQuiccx00SDqRcwLh`
- **Où changer :** https://dashboard.stripe.com → Developers → API Keys → Roll key
- **Action :** Roll la publishable key (et la secret key associée par précaution)

---

## MOYENNE PRIORITÉ

### 6. Google OAuth Client ID
- **Valeur exposée :** `743945650254-roo9t2ep7js5u45upa364odgbl6abvem.apps.googleusercontent.com`
- **Où changer :** https://console.cloud.google.com → APIs & Services → Credentials
- **Action :** Vérifier les restrictions, ajouter des restrictions par bundle ID si pas déjà fait

### 7. Firebase App Check
- **Actuellement :** Désactivé (`firebaseAppCheckEnabled = false`)
- **Où activer :** https://console.firebase.google.com → App Check
- **Action :** Activer App Check avec reCAPTCHA (web) ou DeviceCheck/App Attest (iOS)

---

## BASSE PRIORITÉ

### 8. Firestore Security Rules (CodeSphere)
- **Problème :** Règle wildcard `/{document=**}` qui donne accès à toute la BDD à tout user authentifié
- **Où corriger :** https://console.firebase.google.com → Firestore → Rules
- **Action :** Supprimer la règle wildcard, garder uniquement les règles par collection
- **Note :** Déjà corrigé dans le nouveau repo public, mais à appliquer aussi en production

---

## Checklist

- [ ] Mot de passe `Daniel2904?!` changé partout
- [ ] RevenueCat key régénérée
- [ ] Firebase API key restreinte/régénérée
- [ ] Amplitude key régénérée
- [ ] Stripe key rolled
- [ ] Google OAuth Client ID restrictions vérifiées
- [ ] Firebase App Check activé
- [ ] Firestore rules corrigées en production
- [ ] Vérifier que GoogleService-Info.plist n'est plus dans aucun repo public

---

*Généré le 23/03/2026 — Supprimer ce fichier après avoir effectué toutes les rotations.*
