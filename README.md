# 💻 Digital Banking Frontend - Angular

Cette application représente l'interface utilisateur du projet **Digital Banking**. Elle est développée avec **Angular** et consomme les API REST fournies par le backend Spring Boot.

## 🌐 Fonctionnalités

- 🔐 Authentification des utilisateurs
- 👨‍💼 Affichage et gestion des clients
- 💳 Visualisation des comptes bancaires
- 💸 Consultation des opérations bancaires (crédit, débit, virement)
- 📱 Interface responsive et moderne

## 🛠️ Technologies utilisées

- Angular 17+
- TypeScript
- RxJS
- Bootstrap / Tailwind CSS (selon ton choix)
- Angular HTTPClient
- Angular Router
- Services REST depuis le backend Spring

## 📦 Installation du projet

### 1. Cloner le projet

```bash
git clone https://github.com/Hajarfallaki/Spring-Angular-Use-case-Digital-Banking---Angular-.git
cd digital-banking-web
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le serveur Angular

```bash
ng serve
```

L’application sera disponible à l’adresse suivante :

```bash
➡️ http://localhost:4200/
```

## ⚙️ Configuration
Assurez-vous que l’API du backend tourne sur  http://localhost:8080.
Sinon, modifiez le fichier des environnements Angular :

```bash
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
};
```

## ✅ Fonctionnalités à venir
 Authentification avec JWT

 Recherche dynamique de clients

 Pagination et tri des opérations

## ✍️ Auteur
Hajar Elfallaki-Idrissi
🔗 Profil GitHub

