export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
  content: string;
  githubLink?: string;
  liveLink?: string;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    tiktok?: string;
  };
}

export const articles: Article[] = [
  {
    id: "codesphere",
    title: "CodeSphere",
    description: "IDE web nouvelle génération pour développer directement dans le navigateur",
    image: "/images/codesphere.svg",
    tags: ["React", "TypeScript", "Monaco Editor", "Django", "Firebase", "OpenAI"],
    color: "#06b6d4",
    githubLink: "https://github.com/danou294/codesphere",
    liveLink: "https://codesphere.fr",
    content: `🚀 CodeSphere — L'IDE web nouvelle génération

J'en avais marre d'installer 10 outils avant même d'écrire une ligne de code.
CodeSphere est né de cette idée simple : coder devrait être aussi rapide que l'inspiration.

⸻

💡 Vision

"Je veux que coder soit aussi simple que d'ouvrir une page web."

CodeSphere veut rendre le développement web plus simple, rapide et accessible.
L'idée est d'offrir une plateforme où le code est accessible de partout, hébergé directement en ligne, sans dépendre d'un ordinateur ou d'une configuration locale.
C'est un outil pensé à la fois pour les étudiants débutants, et à terme pour les développeurs confirmés cherchant à travailler efficacement depuis le web.

⸻

🎨 Tech Stack
🧠 React 18 · ⚙️ Django REST · 💬 OpenAI · 💾 Firebase · 💸 Stripe · 🎯 Monaco Editor

L'ensemble est entièrement découplé : React gère le front et la logique UI, Django REST s'occupe de la partie IA et des paiements, et Firebase relie le tout en assurant persistance et sécurité.

⸻

📱 Expérience utilisateur

Le parcours utilisateur a été conçu pour être simple et progressif :
• L'utilisateur peut tester gratuitement l'IDE pour découvrir l'interface.
• Il réalise ensuite qu'il lui manque certaines fonctionnalités : multi-projets, sauvegarde, persistance.
• Il est alors invité à créer un compte pour débloquer l'expérience complète.
• Les utilisateurs Premium accèdent à un chatbot d'aide au code basé sur OpenAI (futur modèle IA maison).

Cette approche progressive rend l'expérience naturelle et motive à s'abonner par envie de progresser, pas par contrainte.

⸻

💻 Fonctionnalités principales
• Éditeur fluide et ergonomique avec Monaco Editor.
• Live preview instantané (HTML, CSS, JS).
• Sauvegarde automatique et gestion de projets.
• Authentification et persistance des sessions.
• Accès Premium : chatbot d'aide IA (intégré directement dans l'IDE).
• Gestion du statut d'abonnement via Stripe.
• Interface responsive, épurée et intuitive.

L'interface est volontairement proche de VS Code pour ne pas dérouter les utilisateurs tout en gardant une légèreté web incomparable.

⸻

🔩 Backend & intégration IA

Côté serveur, CodeSphere s'appuie sur Django REST Framework.
L'API gère :
• Les sessions de chat avec OpenAI,
• La génération automatique des titres de conversation,
• Le traitement des requêtes utilisateurs,
• Et la communication sécurisée avec Stripe.

Tout le backend est conteneurisé avec Docker, prêt à être déployé sur n'importe quel hébergeur compatible, avec Nginx et Gunicorn pour la production.

⸻

💪 Défis & apprentissages

Ce projet m'a appris à me concentrer sur l'essentiel : sortir un MVP fonctionnel avant d'ajouter des features.
Aujourd'hui, je garde cette philosophie sur chaque nouveau projet.

Les défis techniques :
• Performance → Optimisation du rendu grâce à Vite et au lazy loading des composants Monaco.
• État complexe → Stores indépendants (UI / Projets / Tabs) avec Zustand.
• Accessibilité & UX → Interface pensée pour les débutants, mais scalable pour un public pro.
• IA & Chat → Intégration du modèle OpenAI en REST, première version d'un "copilote web".

⸻

💬 Ma contribution

J'ai conçu et développé l'ensemble du projet — du design à la production :
• Développement complet du frontend (React + Vite).
• Intégration du moteur Monaco Editor.
• Création du store global et des services front (auth, chat, stripe, user).
• Développement du backend Django REST.
• Intégration OpenAI et Stripe.
• Déploiement (Vercel + Heroku).

Ce projet m'a permis d'apprendre à structurer un produit SaaS complet, à travailler en MVP et à équilibrer expérience utilisateur et rigueur technique.

⸻

🚀 Vision future
• Ajout de langages supplémentaires (Python, TypeScript complet, frameworks).
• Intégration d'un backend sandboxé et d'une base de données en ligne.
• Création d'un modèle IA personnalisé pour l'aide au code orienté web.
• Déploiement de modèles collaboratifs (partage de code en temps réel).

Mon but est de faire évoluer CodeSphere vers une plateforme SaaS complète pour coder, tester et collaborer depuis n'importe où.

⸻

🎯 Ce que ce projet dit de moi

"Je sais allier technique et produit.
Je sais construire un produit SaaS complet, de la conception au déploiement.
Et surtout, je garde une approche réaliste et motivée : apprendre, itérer, améliorer."

CodeSphere n'est qu'un MVP, mais il représente parfaitement ma façon de travailler :
penser produit, coder proprement, livrer rapidement, apprendre constamment.

⸻

"CodeSphere, c'est mon premier vrai produit SaaS.
J'y ai mis ma curiosité, mes erreurs, et beaucoup de café — mais surtout, ma passion du web."`
  },
  {
    id: "butter",
    title: "Butter",
    description: "Application mobile pour découvrir et gérer des restaurants avec géolocalisation",
    image: "/images/butter.png",
    tags: ["Flutter", "Firestore", "Google Places", "Node.js"],
    color: "#FF6B35",
    githubLink: "https://github.com/danou294/butter2",
    liveLink: "https://www.linkedin.com/company/butterappli/posts/?feedView=all",
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/butterappli/posts/?feedView=all",
      instagram: "https://www.instagram.com/butterguide/",
      tiktok: "https://www.tiktok.com/@butterguide?lang=fr"
    },
    content: `🧈 Butter — L'app mobile qui trouve les bons restos à ta place

Un soir à Paris, deux amies cherchaient un resto. 25 minutes plus tard, elles mangeaient des pâtes.
De cette frustration est née Butter — l'app qui trouve les bons restos à ta place.

⸻

💡 Vision

"Trop d'infos, pas toujours fiables, et pas toutes au même endroit — Butter rassemble tout ce qu'il faut, et seulement ce qu'il faut."

Butter veut devenir le réflexe de recherche quand on sort dîner.
Une app de confiance, qui combine la simplicité d'un feed social à la fiabilité d'un guide sélectif.
L'objectif : que la sortie au restaurant soit agréable du début à la fin, en commençant par une recherche fluide, claire et efficace.

⸻

🎨 Tech Stack
📱 Flutter · 🔥 Firebase · 🗺️ Google Maps · 🍎 iOS Integration · 🎯 Custom API

Butter a été développée entièrement en Flutter, pour permettre un design élégant, performant et compatible iOS/Android.
La gestion Firebase simplifie la sauvegarde des données utilisateurs, tandis que l'intégration Google Maps rend l'expérience géolocalisée et fluide.

⸻

📱 Expérience utilisateur

L'expérience est pensée pour être naturelle et visuelle :
1. L'utilisateur ouvre l'app et clique sur plusieurs filtres (ex. 8e arrondissement, italien, €€).
2. Il parcourt un feed de restaurants illustré avec photos, menus et avis.
3. Un clic sur un restaurant ouvre une fiche complète : menu, localisation, lien de réservation, ou navigation via Waze / Plans.
4. Il peut sauvegarder ses adresses préférées et y revenir plus tard.

L'interface reprend les codes des réseaux sociaux — fluide, scrollable, engageante — mais au service de la gastronomie.

⸻

🧩 Fonctionnalités principales
• Interface de type feed (photos, menus, ambiance).
• Filtres personnalisés : quartier, cuisine, prix.
• Fiches restaurants détaillées avec lien de réservation.
• Sauvegarde d'adresses favorites.
• Intégration navigation : ouverture directe dans Plans / Waze.
• Base de données exclusive : sélection manuelle des restaurants "validés Butter".

Aucune IA ici, juste de la curation humaine et de la qualité manuelle — pour garantir que tout ce qui est affiché est réellement bon.

⸻

🧠 Défis & apprentissages

Ce projet m'a appris l'importance de la curation humaine face à l'overload d'informations.
Aujourd'hui, je privilégie toujours la qualité à la quantité dans mes projets.

Les défis techniques :
• Trop d'infos dispersées → centralisation des meilleures adresses dans une seule base.
• UX mobile exigeante → design sobre, navigation fluide, filtres clairs.
• Déploiement Apple → maîtrise de l'écosystème iOS et de la distribution App Store.

La partie la plus complexe a été la gestion du déploiement Apple, avec la configuration des certificats, profils de provisioning et sandbox pour la publication sur l'App Store.
Une étape longue et exigeante, mais formatrice sur tout le processus de publication mobile professionnel.

⸻

👥 L'équipe
• Daniel Levy — Développeur Flutter & Firebase
Conception, développement complet et intégration technique de l'application.
• Laura Derhy & Noa Afriat — Fondatrices & ambassadrices du projet
Vision produit, accompagnement stratégique et direction artistique.

"Je remercie Laura et Noa pour leur confiance, leur accompagnement, et leur soutien dans les moments les plus durs du projet. Butter, c'est une vraie aventure humaine."

⸻

💪 Ma contribution

J'ai développé l'ensemble de l'application mobile — du design à la publication :
• Développement complet en Flutter (cross-platform iOS/Android).
• Intégration Firebase (Auth, Firestore, Storage).
• Intégration Google Maps SDK pour la géolocalisation.
• Création de l'API custom Firestore pour la base de données restaurants.
• Gestion complète du déploiement Apple (certificats, provisioning, App Store).

Butter, c'est un produit fini, concret et fonctionnel, mais aussi un laboratoire d'apprentissage : gestion Firebase, intégration SDKs, déploiement mobile complet.

⸻

🚀 Vision future
• Étendre Butter à d'autres grandes villes (Londres, Tel Aviv, Barcelone…).
• Ajouter la réservation directe in-app et un système de recommandations personnalisées.
• Développer une interface "influenceur" pour partager ses bonnes adresses.
• Devenir une référence lifestyle et food autour de la découverte et du partage.

Butter doit devenir la première app qu'on ouvre quand on a faim, pas la dernière.

⸻

🎯 Ce que ce projet dit de moi

"Je sais allier technique et produit.
Je suis capable de créer une app mobile de A à Z — du design au déploiement.
Et surtout, je reste motivé, curieux et reconnaissant envers les gens qui m'accompagnent."

Butter, c'est le symbole de ma progression technique et de ma maturité de développeur produit :
je construis, j'apprends, je m'adapte, et je transforme les idées en expériences concrètes.

⸻

"Butter, c'est l'app qui t'évite de scroller pendant 30 minutes avant de dîner.
Simple, sélective et fluide — comme une soirée réussie."`
  }
];
