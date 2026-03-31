  export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Technologies", link: "#technologies" },
    { name: "Experiences", link: "#experiences" },
    { name: "Contact", link: "#contact" },
  ];

  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building an AI SaaS app with a payments system.",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-85 rounded-md",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/coding.png",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 9,
      category: "web",
      type: "web",
      title: "SmoldAI - AI SasS",
      des: "Application integrating multiple Artificial Intelligences. Capability to generate text, code, images, music, and videos. Connect with OAuth, Stripe payment processing, user management, order management, and subscription management...",
      img: "/images/smoldAI.png",
      iconLists: [
        { name: "NextJs", icon: "/next.svg", link: "https://nextjs.org" },
        { name: "TailwindCSS", icon: "/tail.svg", link: "https://tailwindcss.com" },
        { name: "TypeScript", icon: "/ts.svg", link: "https://www.typescriptlang.org" },
        { name: "MongoDB", icon: "/mongo.webp", link: "https://www.mongodb.com" },
        { name: "Stripe", icon: "/stripe.jpeg", link: "https://stripe.com" },
      ],
      link: "https://github.com/orgs/zkerkeb-class/teams/kouci-thomas-et-leo/repositories",
      demo: "https://smold-ai.thomas-jan.fr",
    },
    {
      id: 8,
      category: "web",
      type: "web",
      title: "Spotify Clone - Music Player",
      des: "Reproduction of the Spotify streaming site. Music upload via AWS S3, music converter to mp3, playlist creation, adding music to a playlist, music playback, music search, simultaneous listening via sockets...",
      img: "/images/spotify.png",
      iconLists: [
        { name: "NextJs", icon: "/next.svg", link: "https://nextjs.org" },
        { name: "TailwindCSS", icon: "/tail.svg", link: "https://tailwindcss.com" },
        { name: "MongoDB", icon: "/mongo.webp", link: "https://www.mongodb.com" },
        { name: "Socket.io", icon: "/socket.svg", link: "https://socket.io" },
        { name: "AWS S3", icon: "/aws.svg", link: "https://aws.amazon.com" },
      ],
      link: "https://github.com/orgs/Dev-Cloud-Spotify/repositories",
      demo: "https://spotify-front-end.thomas-jan.fr",
    },
    {
      id: 7,
      category: "web",
      type: "web",
      title: "Imaginify - AI Image SaaS",
      des: "Images design using AI features and a payments and credits system using the latest tech stack.",
      img: "/images/imaginify.png",
      iconLists: [
        { name: "ReactJs", icon: "/react.svg", link: "https://reactjs.org" },
        { name: "TailwindCSS", icon: "/tail.svg", link: "https://tailwindcss.com" },
        { name: "TypeScript", icon: "/ts.svg", link: "https://www.typescriptlang.org" },
        { name: "ThreeJs", icon: "/three.svg", link: "https://threejs.org" },
        { name: "Clerk", icon: "/clerk.svg", link: "https://clerk.dev" },
        { name: "Stripe", icon: "/stripe.jpeg", link: "https://stripe.com" },
      ],
      link: "https://github.com/ThomasJanko/imaginify",
      demo: "https://imaginify.thomas-jan.fr",
    },
    {
      id: 6,
      category: "web3",
      type: "web",
      title: "Crypto-app - Blockchain Application",
      des: "Cryptocurrency transfer application. Allows account creation, authentication, balance viewing, money transfers, transaction history viewing, and sending messages within a transaction...",
      img: "/images/crypto-app.png",
      iconLists: [
        { name: "ReactJs", icon: "/react.svg", link: "https://reactjs.org" },
        { name: "TailwindCSS", icon: "/tail.svg", link: "https://tailwindcss.com" },
        { name: "Ethereum", icon: "/eth.svg", link: "https://ethereum.org" },
        { name: "Metamask", icon: "/metamask.svg", link: "https://metamask.io" },
        { name: "Hardhat", icon: "/hardhat.svg", link: "https://hardhat.org" },
      ],
      link: "https://github.com/ThomasJanko-Blockchain/crypto-wallet",
      demo: "https://crypto-app.thomas-jan.fr",
    },
    {
      id: 5,
      category: "web",
      type: "web",
      title: "G-Formation - Training Platform",
      des: "Implementation of an interconnected web interface with the aim of offering training relating to the GESTIMUM ERP.",
      img: "/images/g-formation.png",
      iconLists: [
        { name: "VueJs", icon: "/vue.svg", link: "https://vuejs.org" },
        { name: "Vuetify", icon: "/vuetify.svg", link: "https://vuetifyjs.com" },
        { name: "Laravel", icon: "/laravel.svg", link: "https://laravel.com" },
        { name: "MySQL", icon: "/mysql.svg", link: "https://www.mysql.com" },
        { name: "Docker", icon: "/dock.svg", link: "https://www.docker.com" },
      ],
      link: "",
      demo: "https://g-formation.gestimum.com",
    },
    {
      id: 4,
      category: "web",
      type: "web",
      title: "Revochat - Chat App",
      des: "Developed a Secure App Chat appllication, similar to discord.",
      img: "/images/revochat.png",
      iconLists: [
        { name: "ReactJs", icon: "/react.svg", link: "https://reactjs.org" },
        { name: "TailwindCSS", icon: "/tail.svg", link: "https://tailwindcss.com" },
        { name: "MongoDB", icon: "/mongo.webp", link: "https://www.mongodb.com" },
        { name: "Socket.io", icon: "/socket.svg", link: "https://socket.io" },
        { name: "Docker", icon: "/dock.svg", link: "https://www.docker.com" },
      ],
      link: "https://github.com/Revochat",
      demo: "https://github.com/Revochat",
    },
    
    {
      id: 3,
      category: "web",
      type: "web",
      title: "AirBnb clone - Booking Platform",
      des: "Airbnb clone. Allows users to create an account, search for accommodation, book accommodation, view booking history, and manage their account...",
      img: "/images/airbnb.png",
      iconLists: [
        { name: "NextJs", icon: "/next.svg", link: "https://nextjs.org" },
        { name: "ReactJs", icon: "/react.svg", link: "https://reactjs.org" },
        { name: "TailwindCSS", icon: "/tail.svg", link: "https://tailwindcss.com" },
        { name: "MongoDB", icon: "/mongo.webp", link: "https://www.mongodb.com" },
      ],
      link: "https://github.com/ThomasJanko/airbnb-clone",
      demo: "https://airbnb.thomas-jan.fr",
    },
    {
      id: 2,
      category: "web",
      type: "web",
      title: "Netflix clone - Streaming Platform",
      des: "Reproduction of the Netflix streaming site. Use of Next.js and the opensource themoviedb api. Creation of an authentication page and movie retrieval services...",
      img: "/images/netflix.png",
      iconLists: [
        { name: "NextJs", icon: "/next.svg", link: "https://nextjs.org" },
        { name: "ReactJs", icon: "/react.svg", link: "https://reactjs.org" },
        { name: "TailwindCSS", icon: "/tail.svg", link: "https://tailwindcss.com" },
        { name: "MongoDB", icon: "/mongo.webp", link: "https://www.mongodb.com" },
      ],
      link: "https://github.com/ThomasJanko/Netflix/tree/master",
      demo: "https://g-formation.gestimum.com",
    },
    {
      id: 1,
      category: "web",
      type: "web",
      title: "Sportizer - Basketball Scoreboard",
      des: "Dynamic and ergonomic basketball scoreboard application to replace old scoreboards in gyms. Created a 'remote' interface and a 'screen' interface to control all match variables...",
      img: "/images/sportizer.png",
      // iconLists: ["/react.svg", "/socket.svg", "/tail.svg", "/react-native.webp", "/figma.svg"],
      iconLists: [
        { name: "ReactJs", icon: "/react.svg", link: "https://reactjs.org" },
        { name: "Socket.io", icon: "/socket.svg", link: "https://socket.io" },
        { name: "TailwindCSS", icon: "/tail.svg", link: "https://tailwindcss.com" },
        { name: "Figma", icon: "/figma.svg", link: "https://www.figma.com" },
      ],
      link: "",
      demo: "",
    },
    {
      id: 10,
      category: "web",
      type: "web",
      title: "Wedding-Hat - Wedding Organization SaaS",
      des: "All-in-one wedding planning SaaS with RSVP boosted with MCP AI assistant: WeddingGPT can directly CRUD data in-app. Includes website builder, organization workflows, role management, table plan, seating cards, playlists, guest/vendor management, and budgets.",
      img: "/images/weddinghat-dashboard.png",
      iconLists: [
        { name: "NextJs", icon: "/next.svg", link: "https://nextjs.org" },
        { name: "TypeScript", icon: "/ts.svg", link: "https://www.typescriptlang.org" },
        { name: "TailwindCSS", icon: "/tailwindcss.svg", link: "https://tailwindcss.com" },
        { name: "Supabase", icon: "/supabase.webp", link: "https://supabase.com" },
        { name: "OpenAI / MCP", icon: "/chatgpt.svg", link: "https://modelcontextprotocol.io" },
      ],
      link: "https://github.com/SaaS-ThomasJanko/wedding-saas",
      demo: "https://weddinghat.thomas-jan.fr/",
    },
    
  ];

  export const reactNativeProjects = [
    {
      id: 3,
      category: "mobile",
      type: "mobile",
      title: "Instagram Clone - Social Media",
      des: "Reproduction of the Instagram social network. Allows users to create an account, post photos, view photos, and manage their account...",
      img: ["/images/insta-native_1.jpg", "/images/insta-native_2.jpg"],
      iconLists: [
        { name: "React Native", icon: "/react-native.webp", link: "https://reactnative.dev" },
        { name: "Expo", icon: "/expo.svg", link: "https://expo.dev" },
        { name: "Redux", icon: "/redux.svg", link: "https://redux.js.org" },
        { name: "Firebase", icon: "/firebase.svg", link: "https://firebase.google.com" },
      ],
      link: "https://github.com/ThomasJanko/InstaReactNative",
      demo: "",
    },
    {
      id: 2,
      category: "mobile",
      type: "mobile",
      title: "TaskMaster - Task Manager",
      des: "Task manager application. Allows users to create tasks, view task, manage it and complete it.",
      img: ["/images/taskmaster_1.jpg", "/images/taskmaster_2.jpg"],
      iconLists: [
        { name: "React Native", icon: "/react-native.webp", link: "https://reactnative.dev" },
        { name: "Redux", icon: "/redux.svg", link: "https://redux.js.org" },
      ],
      link: "https://github.com/ThomasJanko-react-native/react-native-group",
      demo: "",
    },
    {
      id: 1,
      category: "web3",
      type: "mobile",
      title: "NFT Marketplace - Blockchain",
      des: "NFT Marketplace. Allows users to see NFTs, and place bids on them.",
      img: ["/images/react-native-nft_1.jpg", "/images/react-native-nft_2.jpg"],
      iconLists: [
        { name: "React Native", icon: "/react-native.webp", link: "https://reactnative.dev" },
        { name: "Expo", icon: "/expo.svg", link: "https://expo.dev" },
        { name: "Ethereum", icon: "/eth.svg", link: "https://ethereum.org" },
        { name: "Metamask", icon: "/metamask.svg", link: "https://metamask.io" },
      ],
      link: "",
      demo: "",
    },
  ];

  export const web3Resources = [
    {
      id: 1,
      title: "CV Blockchain 2026 (English)",
      des: "Detailed profile for Web3 and blockchain roles in English.",
      lang: "EN",
      file: "/CV/JANKOWSKI THOMAS CV 2026 - Développeur Blockchain - EN.pdf",
    },
    {
      id: 2,
      title: "CV Blockchain 2026 (Français)",
      des: "Profil complet pour les roles blockchain et Web3 en français.",
      lang: "FR",
      file: "/CV/JANKOWSKI THOMAS CV 2026 - Développeur Blockchain.pdf",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Développeur Web & Mobile - Gestimum",
      desc: "Développement et maintenance d'applications métier en Next.js, TypeScript, Tailwind CSS et React Native.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Développeur Full-Stack - Gestimum",
      desc: "Architecture technique, APIs Express.js, automatisations, et déploiement Docker / GitLab CI/CD sur Ubuntu.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Développeur dApp - Certification Alyra",
      desc: "Conception de smart contracts Solidity et dApps React/Next.js avec Wagmi, Hardhat et OpenZeppelin.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Mise en production & Supervision",
      desc: "Migration, conteneurisation, supervision des applications, mails transactionnels et notifications.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];

  export const experiences = [
    {
        type: "stage",
        title: "Développeur Full-Stack - Gestimum",
        titleEn: "Full-Stack Developer - Gestimum",
        company_name: "Gestimum",
        icon: '/gestimum.png',
        iconBg: "#E6DEDD",
        date: "Octobre 2021 -> Juin 2022",
        dateEn: "October 2021 -> June 2022",
        points: [
            "Formation en autonomie sur Vue.js et Laravel.",
            "Développement d'un site web de formation (G-Formation).",
            "Premières contributions à une plateforme orientée métier en environnement professionnel.",
        ],
        pointsEn: [
            "Self-training on Vue.js and Laravel.",
            "Development of a training website (G-Formation).",
            "First contributions to business-oriented applications in a professional environment.",
        ],
    },

    {
        type: "alternance",
        title: "Développeur Full-Stack - Gestimum",
        titleEn: "Full-Stack Developer - Gestimum",
        company_name: "Gestimum",
        icon: "/gestimum.png",
        iconBg: "#383E56",
        date: "Septembre 2022 -> Septembre 2024",
        dateEn: "September 2022 -> September 2024",
        points: [
            "Développement et maintenance d'applications web et mobiles orientées métier (Next.js, TypeScript, Tailwind CSS, React Native).",
            "Développement et amélioration du site G-Formation avec personnalisation avancée pour la vente de formations.",
            "Conception d'une application mobile React Native de saisie déportée connectée au CRM Gestimum.",
            "Refonte complète de l'espace privé Gestimum.",
            "Développement d'une application interne de gestion des tickets.",
            "Création d'API Express.js pour l'interfaçage entre Gestimum et des clients externes.",
        ],
        pointsEn: [
            "Development and maintenance of business-oriented web and mobile applications (Next.js, TypeScript, Tailwind CSS, React Native).",
            "Enhancement of the G-Formation platform with advanced customization for training sales.",
            "Design and development of a React Native mobile app connected to the Gestimum CRM.",
            "Full redesign of the Gestimum private area.",
            "Development of an internal ticket management application.",
            "Creation of Express.js APIs for integrations between Gestimum and external clients.",
        ],
    },

    {
        type: "cdi",
        title: "Développeur Web & Mobile / Full-Stack - Gestimum",
        titleEn: "Web & Mobile / Full-Stack Developer - Gestimum",
        company_name: "Gestimum",
        icon: "/gestimum.png",
        iconBg: "#E6DEDD",
        date: "Octobre 2024 (Poste actuel)",
        dateEn: "October 2024 (Current role)",
        points: [
            "Participation à l'architecture technique et à l'amélioration continue des performances.",
            "Création d'une IA spécialisée dans la documentation et les WebServices Gestimum (Ollama, OpenWebUI).",
            "Développement d'un middleware sécurisé pour les WebServices Gestimum (authentification, redirection, sécurisation des flux).",
            "Déploiement et supervision des applications en environnement de production (Docker / GitLab CI/CD).",
            "Migration de l'ensemble des applications vers un serveur Ubuntu et conteneurisation avec Docker.",
            "Implémentation de mails automatiques transactionnels et notifications.",
        ],
        pointsEn: [
            "Participation in technical architecture and continuous performance improvement.",
            "Creation of an AI assistant specialized in Gestimum documentation and WebServices (Ollama, OpenWebUI).",
            "Development of secure middleware for Gestimum WebServices (authentication, routing, and secured data flows).",
            "Deployment and supervision of production applications (Docker / GitLab CI/CD).",
            "Migration of all applications to an Ubuntu server and full Docker containerization.",
            "Implementation of automatic transactional emails and notifications.",
        ],
    },

    {
        type: "formation",
        title: "Développeur dApp - Certification Alyra",
        titleEn: "dApp Developer - Alyra Certification",
        company_name: "Alyra",
        icon: "/alyra.webp",
        iconBg: "#232631",
        date: "Janvier -> Avril 2025",
        dateEn: "January -> April 2025",
        points: [
            "Conception et déploiement de smart contracts Solidity sur réseau EVM (testnet / mainnet).",
            "Développement d'une interface dApp en React/Next.js connectée au smart contract via Wagmi.",
            "Tests unitaires et d'intégration avec Hardhat et Ganache.",
            "Gestion des wallets, signatures et transactions on-chain avec MetaMask et WalletConnect.",
            "Exploration des standards ERC-20, ERC-721 (NFT) et ERC-1155.",
            "Sécurisation des contrats avec OpenZeppelin (reentrancy, access control).",
        ],
        pointsEn: [
            "Design and deployment of Solidity smart contracts on EVM networks (testnet / mainnet).",
            "Development of a React/Next.js dApp interface connected through Wagmi.",
            "Unit and integration testing with Hardhat and Ganache.",
            "Wallet, signature, and on-chain transaction management with MetaMask and WalletConnect.",
            "Exploration of ERC-20, ERC-721 (NFT), and ERC-1155 standards.",
            "Smart contract hardening with OpenZeppelin (reentrancy and access control).",
        ],
    },
];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/ThomasJanko"
    },
    {
      id: 2,
      img: "/insta.svg",
      link: "https://www.instagram.com/thomasj78125"
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://linkedin.com/in/thomas-jankowski-b3483a216"
    },
  ];

  export const approachs = [
    {
      id: 1,
      title: "Planning & Strategy",
      description: "One of the most important phases of the project is the planning and strategy phase. This is where we define the project scope, objectives, and requirements.",
      background: "bg-emerald-900",
      colors: [[0, 255, 255]],
    },
    {
      id: 2,
      title: "Design & Development",
      description: "Once the planning and strategy phase is complete, we move on to the design and development phase. This is where we create the visual design and develop the project.",
      background: "bg-red-700",
      colors: [[7, 229, 251 ]],
    },
    {
      id: 3,
      title: "Testing & Deployment",
      description: "After the design and development phase is complete, we move on to the testing and deployment phase. This is where we test the project to ensure it meets the requirements and deploy it to the live environment.",
      background: "bg-sky-600",
      colors: [[0, 255, 255]],
    },
  ];

  export const technologies = [
    {
      title: "Programming Languages",
      icon: "/code.svg",
      items: [
        { name: "HTML", icon: "/html.svg", link: "https://html.spec.whatwg.org"},
        { name: "CSS", icon: "/css.svg", link: "https://www.w3.org/Style/CSS/Overview.en.html"},
        { name: "JavaScript", icon: "/js.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
        { name: "TypeScript", icon: "/ts.svg", link: "https://www.typescriptlang.org"},
        { name: "Python", icon: "/python.svg", link: "https://www.python.org"},
        { name: "Solidity", icon: "/solidity.webp", link: "https://soliditylang.org"},
        { name: "C#", icon: "/csharp.webp", link: "https://learn.microsoft.com/en-us/dotnet/csharp/"},
      ]
    },
    {
      title: "Frameworks",
      icon: "/frameworks.webp",
      items: [
        { name: "NextJs", icon: "/next.svg", link: "https://nextjs.org"},
        { name: "ReactJs", icon: "/react.svg", link: "https://reactjs.org"},
        { name: "React Native", icon: "/react-native.webp", link: "https://reactnative.dev"},
        { name: "TailwindCSS", icon: "/tailwindcss.svg", link: "https://tailwindcss.com"},
        { name: "Redux", icon: "/redux.svg", link: "https://redux.js.org"},
        { name: "VueJs", icon: "/vue.svg", link: "https://vuejs.org"},
        { name: "Vuetify", icon: "/vuetify.svg", link: "https://vuetifyjs.com"},
        { name: "Laravel", icon: "/laravel.svg", link: "https://laravel.com"},
        { name: "Vite", icon: "/vite.svg", link: "https://vitejs.dev"},
        { name: "ThreeJs", icon: "/three.svg", link: "https://threejs.org"},
        { name: "Spline", icon: "/spline.webp", link: "https://spline.design"},

      ]
    },
    {
      title: "Libraries",
      icon: "/libraries.png",
      items: [
        { name: "Shadcn-UI", icon: "/shadcn.png", link: "https://ui.shadcn.com/"},
        { name: "Aceternity-UI", icon: "/aceternity.webp", link: "https://ui.aceternity.com/"},
        { name: "Material-UI", icon: "/material.svg", link: "https://material-ui.com"},
        { name: "Framer Motion", icon: "/fm.svg", link: "https://www.framer.com/motion"},
        { name: "SASS", icon: "/sass.svg", link: "https://sass-lang.com"},
        { name: "Clerk", icon: "/clerk.svg", link: "https://clerk.dev"},
        { name: "Stripe", icon: "/stripe.jpeg", link: "https://stripe.com"},
      ]
    },
    {
      title: "Web3",
      icon: "/blockchain.png",
      items: [
        { name: "Solidity", icon: "/solidity.webp", link: "https://soliditylang.org"},
        { name: "Hardhat", icon: "/hardhat.svg", link: "https://hardhat.org"},
        { name: "Wagmi", icon: "/wagmi.avif", link: "https://wagmi.sh"},
        { name: "Ether.js", icon: "/eth.svg", link: "https://ethereum.org/en/developers/docs/ethereum-stack/libraries/libraries-in-javascript/"},
        { name: "DeFi", icon: "/uniswap.webp", link: "https://uniswap.org"},
        { name: "NFT Standards", icon: "/nft.webp", link: "https://eips.ethereum.org/EIPS/eip-721"},
        { name: "OpenZeppelin", icon: "/openzeppelin.webp", link: "https://www.openzeppelin.com"},
        { name: "IPFS", icon: "/ipfs.webp", link: "https://ipfs.tech"},
        { name: "Ganache", icon: "/ganache.svg", link: "https://www.trufflesuite.com/ganache"},
      ]
    },
    {
      title: "Tools",
      icon: "/tools.png",
      items: [
        { name: "Github", icon: "/git.svg", link: "https://github.com"},
        { name: "Gitlab", icon: "/gitlab.svg", link: "https://gitlab.com"},
        { name: "Docker", icon: "/dock.svg", link: "https://www.docker.com"},
        { name: "Notion", icon: "/notion.svg", link: "https://www.notion.so"},
        { name: "Figma", icon: "/figma.svg", link: "https://www.figma.com"},
        { name: "VSCode", icon: "/vscode.svg", link: "https://code.visualstudio.com"},
        { name: "Postman", icon: "/postman.svg", link: "https://www.postman.com"},
        { name: "ChatGPT", icon: "/chatgpt.svg", link: "https://chatgpt.com"},
        {name: "Claude", icon: "/claude.webp", link: "https://www.anthropic.com"},
        {name: "Cursor", icon: "/cursor.webp", link: "https://www.cursor.com"},
        { name: "MongoDB", icon: "/mongo.webp", link: "https://www.mongodb.com"},
      ]
    }
  ]