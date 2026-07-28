# Prompt pour Claude Design — Refonte du portfolio (version freelance premium)

Copie-colle le bloc ci-dessous tel quel dans Claude Design.

---

## Contexte

Tu es un directeur artistique spécialisé en design d'interfaces web premium pour des professionnels du digital (studios créatifs, freelances confirmés, consultants). Je te demande de concevoir la maquette (desktop + mobile) d'un nouveau portfolio pour un développeur fullstack qui lance son activité freelance et doit convaincre des clients (startups, PME, agences en sous-traitance) de lui confier des projets. L'objectif n'est pas de démontrer des prouesses techniques en animation, mais d'installer une impression immédiate de sérieux, de rigueur et de professionnalisme — au niveau d'un studio premium, pas d'un portfolio étudiant.

Le portfolio actuel est surchargé : trop d'animations (globe 3D, effets de particules, cartes qui pivotent, glow, gradients), et les projets sont noyés dans le décor au lieu d'être mis en valeur. La refonte doit inverser cette logique : le contenu (projets, expertise, preuve de sérieux) devient la star, le design s'efface pour le servir.

## Identité à mettre en scène

- Nom : Thomas Jankowski
- Rôle : Développeur Fullstack Freelance
- Stack cœur (à afficher en priorité, sans sur-vulgariser) : React, Next.js, TypeScript, TailwindCSS, React Native
- Stack secondaire solide : Vue.js, Laravel, Node.js, NestJS, Docker, Linux
- Différenciateur rare à mettre en avant : formation développeur blockchain (3 mois) + appétence Web3/Smart Contracts — élément qui le distingue des devs fullstack généralistes
- Expérience : environ 4 ans et 9 mois d'expérience terrain (3 ans en alternance + 1 an 9 mois en CDI), dont des missions en environnement d'entreprise réel (plateforme interne utilisée en production, intégrations Teams/Graph API, API d'interfaçage entre systèmes)
- Positionnement : polyvalence fullstack rare (JS/TS multi-frameworks + mobile + backend + notions blockchain), autonomie, capacité à livrer un produit de bout en bout
- Cible : startups (besoin de vitesse et de produit), PME (besoin de fiabilité et de suivi), agences (besoin d'un renfort fiable en sous-traitance) — le portfolio doit rassurer les trois profils à la fois

## Direction artistique : "Light éditorial premium"

- Fond clair, blanc cassé / ivoire (pas de blanc pur agressif), jamais de fond sombre par défaut
- Typographie forte façon magazine : une police display élégante (serif moderne ou sans-serif à fort caractère) pour les titres, associée à une police sans-serif neutre et très lisible pour le texte courant
- Une seule couleur d'accent, sobre et distinctive (à proposer : un bleu encre profond, un vert forêt désaturé, ou un terracotta/ocre discret — pas de bleu/violet "startup SaaS générique", pas de dégradé multicolore)
- Grands espaces blancs, grille éditoriale stricte, alignements millimétrés
- Hiérarchie typographique très marquée (gros titres, sous-titres discrets, texte de lecture confortable)
- Photos/captures de projets traitées de façon uniforme (même ratio, même style de cadre, ombre légère et cohérente — pas d'effets 3D ni de tilt au survol)

## Ce qu'il faut supprimer par rapport à la version actuelle

- Le globe 3D, les effets de particules/confettis, les beams et spotlights animés en fond
- Les cartes 3D qui pivotent au survol (3d-card, 3d-pin)
- Les effets de glow, gradients animés, bordures qui bougent (moving border, shimmer button)
- Toute animation qui n'a pas une fonction claire (les animations restantes doivent être des micro-interactions discrètes : fade-in léger au scroll, transition d'opacité, changement d'état au survol — rien de plus)
- La juxtaposition de trop d'éléments visuels sur une même section (viser un seul point focal par section)

## Structure attendue

**Page d'accueil**

1. Hero épuré : nom, positionnement en une phrase forte (développeur fullstack freelance, polyvalence rare + touche blockchain), un sous-texte de réassurance (expérience, disponibilité), un seul CTA net ("Discutons de votre projet" / "Voir les projets"). Pas de fond animé, une typographie qui porte la page à elle seule.
2. Positionnement / à propos : qui il est, ce qu'il résout pour un client, pourquoi le choisir plutôt qu'un autre freelance (polyvalence fullstack + web3 + mobile), présenté en texte éditorial clair, pas en cartes gadget.
3. Projets phares (6 maximum, mis en avant en grand format, un par ligne ou grille 2 colonnes très aérée) — pour chaque projet : visuel propre en plein cadre, titre, contexte en une phrase, stack utilisée (logos discrets, pas de badges criards), et si pertinent un résultat concret. Projets à intégrer en priorité :
   - Wedding-Hat — SaaS d'organisation de mariage tout-en-un avec assistant IA (produit complet, le plus impressionnant en portée fonctionnelle)
   - G-Formation — plateforme de formation développée et déployée en production pour une entreprise réelle (preuve de fiabilité professionnelle, pas un clone)
   - Stocks-App — plateforme boursière temps réel avec IA et graphiques TradingView
   - Sportizer — tableau de score de basketball avec double interface télécommande/écran (preuve de réflexion produit et UX, pas juste du code)
   - Staking DApp — dApp de staking avec wallet et interactions on-chain (preuve de la compétence blockchain différenciante)
   - SmoldAI — SaaS multi-IA avec paiements Stripe et gestion d'abonnements (preuve de compétence SaaS complète : auth, paiement, IA)
   - Un lien clair en fin de section vers une page annexe "Tous les projets" pour les ~8 autres projets (clones Netflix/Airbnb/Instagram, Crypto-app, Revochat, Imaginify, TaskMaster, NFT Marketplace), présentés là dans une grille plus dense et plus simple.
4. Stack technique : présentée sobrement, groupée par niveau de maîtrise (cœur de compétences / avancé / moyen), sans nuage de logos qui flotte — une grille propre et lisible.
5. Expériences professionnelles : timeline verticale sobre (stage → alternances → CDI), sans effets de scroll complexes, avec des puces de contenu concises.
6. Section confiance/contact : rappel de la disponibilité freelance, éventuellement une fourchette de TJM ou "devis sur demande", email et lien de contact, CTA final unique et clair.

**Page annexe "Tous les projets"**

Grille dense mais propre (3 colonnes desktop), filtrable par catégorie (Web / Mobile / Web3), même traitement visuel que les projets phares mais en format plus compact, sans description longue — juste titre, stack, lien.

## Livrable attendu

- Maquette desktop (1440px) et mobile (390px) de la page d'accueil
- Vue de la page "Tous les projets"
- Palette de couleurs précise (codes hex) et couple de polices recommandé (avec noms de polices réelles disponibles sur Google Fonts, puisque l'implémentation se fera ensuite en Next.js + TailwindCSS)
- Le design doit rester réalisable avec des composants web standards (pas d'effets qui nécessitent du WebGL ou du canvas complexe) puisqu'il sera intégré directement dans le code existant (Next.js 14, TailwindCSS, TypeScript)

---

*Note : ce fichier est un prompt à copier-coller, pas le portfolio lui-même. Une fois la maquette obtenue, je pourrai t'aider à l'intégrer dans ton code Next.js existant.*
