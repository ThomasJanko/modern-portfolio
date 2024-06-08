  export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
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
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
    
  ];

  export const reactNativeProjects = [
    {
      id: 1,
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
      id: 3,
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
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];

  export const experiences = [
    {
        title: "Vue JS Developer",
        company_name: "Gestimum",
        icon: '/gestimum.png',
        iconBg: "#E6DEDD",
        date: "April 2021 - July 2021",
        points: [
            "Internship for DUT, first internship in web development.",
            "Two-week self-training on Vue JS, Vuetify, and Laravel.",
            "Collaborated with a backend developer intern to create a web platform to replace the company's training organization process.",
            "Participated in the project creation (mockup, database, etc.).",
        ],
    },

    {
        title: "React JS Developer",
        company_name: "Sportizer",
        icon: "/sportizer_logo.svg",
        iconBg: "#383E56",
        date: "October 2021 - June 2022",
        points: [
            "Ydays project (school) in a startup with 3 people.",
            "Collaborated with 3 teams of 4-5 people (marketing, 3D design, and IT).",
            "Designed a dynamic and ergonomic basketball scoreboard application to replace old scoreboards in gyms.",
            "Created a 'remote' interface and a 'screen' interface to control all match variables.",
            "Used a socket.io server to minimize transmission delay between the remote and display.",
            "See PDF ->",
        ],
        pdf: ''
    },

    {
        title: "Fullstack Developer",
        company_name: "Gestimum",
        icon: "/gestimum.png",
        iconBg: "#E6DEDD",
        date: "April 2022 - July 2022",
        points: [
            "Resumed development of the G-Formation platform.",
            "Collaborated with 2 new interns.",
            "Implemented automatic emails (Mailtrap) and began launching tests within the company.",
            "Set up a server to host the first internal production version of the platform.",
        ],
    },

    {
        title: "Frontend Developer",
        company_name: "Revochat",
        icon: "/revochat.png",
        iconBg: "#E6DEDD",
        date: "October 2022 - May 2023",
        points: [
            "Developed a Web3 instant messaging application in React JS.",
            "Ydays project (school) with a team of 7 developers.",
            "Used Web3.0 technology to create one of the first chat applications on the Blockchain, ensuring its immutability.",
            "Deployed the application using Smart Contracts.",
        ],
    },

    {
        title: "Fullstack Developer",
        company_name: "Gestimum",
        icon: "/gestimum.png",
        iconBg: "#383E56",
        date: "September 2022 - September 2024",
        points: [
            "Resumed development of the G-Formation platform with the same interns.",
            "Implemented an SMTP server to send emails to clients.",
            "Tested the platform with all company services to identify potential issues and familiarize them with the platform.",
            "Set up a task scheduler with Laravel for automatic execution of certain site features.",
            "Opened the platform externally to organize real training sessions with Gestimum clients and partners.",
            "Created a pre-production site to continue testing and adding new features.",
            "Updated and maintained the G-Formation platform.",
            "Developed an internal ticket management application (G-Tickets) with integrations (Teams / Graph API) to facilitate and speed up internal processing.",
            "Redesigned the Gestimum private space (Client area) with new technologies (Vue.js / Express.js) and deployed the new version.",
            "Developed an API to interface between Gestimum and an external company (Kaze) to facilitate technical interventions for Gestimum clients.",
            "Deployed the private space, G-Ticket, and the interfacing API with Docker on an Ubuntu server.",
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
        { name: "MongoDB", icon: "/mongo.webp", link: "https://www.mongodb.com"},
        { name: "Ganache", icon: "/ganache.svg", link: "https://www.trufflesuite.com/ganache"},
      ]
    }
  ]