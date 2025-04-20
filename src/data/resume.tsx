import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "M.Emin",
  initials: "MEK",
  url: "https://mehmeteminkarakan.me",
  location: "İstanbul/Türkiye",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Kod yazmayı, kullanıcı deneyimini tasarlamayı ve sürekli öğrenmeyi seviyorum. Frontend ağırlıklı full-stack geliştirici.",
  summary:
    "2017'de başladığım yolculukta [JavaScript ve TypeScript](#education) tarafında uzmanlaştım. Bugünlerde çoğunlukla [Next.js ve React](#education) ile uğraşıyorum. Daha önceden [2D/3D oyun geliştirme alanında çalıştım](#education) ve [birçok uluslararası projede bulundum](#education). En büyük prensibim ['çalışsın'](#education) demek yerine kaliteli kod yazmak, bu yüzden sürekli araştırmaya ve güncel kalmaya çalışıyorum. Yazılımın gittiği yeri takip etmek beni her zaman heyecanlandırıyor. Özellikle de [karmaşık sorunları alıp bunları yazılım ile çözmeyi](#education) gerçekten seviyorum.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D4D03AQFiHN-CMpftjQ/profile-displayphoto-shrink_200_200/B4DZZTclwlGwAg-/0/1745156726332?e=1750896000&v=beta&t=lDueo2H6O90eqJptG2mWn3gGEgVnlePaKJ_96K5Pp58",

  skills: [
    "TypeScript",
    "JavaScript",
    "Next.js",
    "React",
    "Redux",
    "Zustand",
    "Figma",
    "Angular",
    "SolidJS",
    "Svelte",
    "PHP",
    "Node.js",
    "Nest.js",
    "SQL",
    "Laravel",
    "Zustand",
    "HTML5",
    "CSS3 • SASS",
    "Tailwind CSS",
    "Git",
    "Azure",
    "CI/CD",
    "Jest",
    "Docker",
    "RESTful API",
    "Unit Testing",
    "OOP",
    "Unreal Engine",
    "Game Development",
    "Microservices",
    "WebSocket",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    /* { href: "/blog", icon: NotebookIcon, label: "Blog" }, */
  ],
  contact: {
    email: "eminkarakan0@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mehmet-emin-k-a1597b190/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/MehmetE08339585",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:eminkarakan0@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "EAE Group",
      href: "https://www.eaeelectric.com/",
      badges: [],
      location: "İstanbul/Türkiye",
      title: "Senior Software Developer",
      logoUrl: "https://www.eae.com.tr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feae-elektrik-logo.c571e196.webp&w=640&q=75",
      start: "Eylül 2023",
      end: "Devam Ediyor",
      description:
        "• Introduced Next.js, React, and TypeScript technologies to the company, established modern component architecture and improved code quality, providing uninterrupted service to 30,000+ monthly users. \n\n• Developed a comprehensive design system for corporate websites, creating reusable components, color palette, grid system, etc., reducing design preparation time by 60% and accelerating project development processes. \n\n• Created the products section for a company with 40,000+ product range, building an advanced UI/UX infrastructure with a fast quote request system, increasing website traffi c by 20% and enabling millions of dollars in potential product sales. • Utilized server-side rendering and static site generation features, optimizing page loading times and implementing SEO-friendly structures, signifi cantly increasing search engine visibility and enhancing user experience. \n\n• Set up CI/CD pipelines and automated deployment processes on Vercel and Plesk platforms, integrating custom runners and test automation, reducing development-to-production transition time by 70% and improving code quality.",
    },
    {
      company: "Upwork",
      href: "https://www.upwork.com/",
      badges: [],
      location: "Remote",
      title: "Senior Full-Stack Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D560BAQFHVb6ZSCipCw/company-logo_100_100/company-logo_100_100/0/1727104517379/upwork_logo?e=1750291200&v=beta&t=H_jBwk9gVCGvuBxoVzCCe8F8VBquDUKqYfQGWPd7pkk",
      start: "Kasım 2020",
      end: "Devam Ediyor",
      description:
        "• Developed web applications for clients from the USA, United Kingdom, Canada, and various countries, using React, Vue, TypeScript, Javascript, Node.js, and PHP technologies to create custom solutions based on client requirements, achieving 100% customer satisfaction and 100% Job Success Score. \n\n\• Created structures that establish effi cient communication between frontend and backend systems using RESTful APIs, ensuring performant and reliable data fl ow.",
    },

    {
      company: "Falcon Gaming",
      badges: [],
      href: "https://shopify.com",
      location: "Üsküp, Kuzey Makedonya",
      title: "Front-end / Game Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4E0BAQEGWMu4IMtr-Q/company-logo_100_100/company-logo_100_100/0/1657528546702?e=1750291200&v=beta&t=sEclgGRQfJzSJLt12m6hJgLmQ_ax2da2nTXjTGKXrr0",
      start: "Ekim 2020",
      end: "Kasım 2022",
      description:
        "• Designed and developed frontend architecture for numerous 2D and 3D web games from scratch, creating modular and performance-focused code using TypeScript and Javascript, increasing company recognition and gaining 10,000+ new users. \n\n\• Wrote comprehensive unit tests using Jest and Testing Library, creating automated test scenarios, reducing error rates by 40% and improving software reliability. \n\n\• Developed scalable applications using SolidJS, Angular and Svelte, implementing component-based architecture and state management tools like Zustand, accelerating software development processes by 20%. \n\n\• Implemented RESTful API integrations, ensuring effi cient data fl ow with backend services, optimizing page loading times and enhancing user experience.",
    },
    {
      company: "Stabit",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Full Stack Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQGstzktgo9nNA/company-logo_100_100/company-logo_100_100/0/1687168442682/stabit_logo?e=1750291200&v=beta&t=V3A33M0SFsgcCXhalE0m3zvvH98UaLSQvsUyH4X1hn0",
      start: "Ocak 2020",
      end: "Nisan 2020",
      description:
        "• Developed a cryptocurrency exchange website and management panel, using Laravel for both Frontend and Backend, playing a critical role in launching the company's fi rst MVP product. \n\n\• Created SQL database structures, utilizing complex queries and relational database architecture, improving application performance and maintaining data integrity. \n\n\• Implemented Paxos cryptocurrency payment system integration, working with secure transaction protocols and fi nancial APIs, providing users with secure and seamless fi nancial transaction capabilities.",
    },
  ],
  education: [
    {
      school: "Harvard University",
      href: "https://buildspace.so",
      degree: "CS50 Introduction to Computer Science",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4E0BAQF5t62bcL0e9g/company-logo_100_100/company-logo_100_100/0/1631318058235?e=1750291200&v=beta&t=dWSAl4QKkFSPLev1Qgao6LQOVYEw7VeBfWT9zWusiok",
      start: "2023",
      end: "2024",
    },
    {
      school: "Marmara Üniversitesi",
      href: "https://uwaterloo.ca",
      degree: "Labor Economics and Industrial Relations",
      logoUrl:
        "data:image/png;base64,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",
      start: "2016",
      end: "2023",
    },
    {
      school: "Anadolu Üniversitesi",
      href: "https://wlu.ca",
      degree: "Web Design and Coding",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQH1gC6nvL5-aw/company-logo_100_100/company-logo_100_100/0/1690976908547/anadoluuniv_logo?e=1750291200&v=beta&t=XIXJLwepvj8n-G7DSlJA_-BUkZDmrD8l-6BiG24CWjg",
      start: "2018",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description: "Designed, developed and sold animated UI components for developers.",
      technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Shadcn UI", "Magic UI", "Stripe", "Cloudflare Workers"],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description: "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Shadcn UI", "Magic UI", "Stripe", "Cloudflare Workers"],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Easy Support Systems (Client - Backoffice)",
      dates: "June 10th, 2017",
      location: "İstanbul, Turkey",
      description:
        "React, Typescript, .NET teknolojileri ile, kullanıcıların binlerce kombinasyon oluşturulabileceği (28.000+ üzerinde), zorlu bir ürün grubunu sadece birkaç seçimle istedikleri şekilde tamamlayabilecekleri bir yapıya döndüştürdük. \n\nFigma ile modern bir tasarım oluşturdum.  Onlarca farklı parametre ile (yük hesaplamaları, ürünlerin birbirine uyumlu olması, ürünün en ufak özelliği değişince uyumlu olduğu ürünlerin değişmesi) gibi çok spesifik ve kullanışlı bir uygulama ortaya çıktı. ",
      image: "https://aski-front.vercel.app/assets/main-bg-Dg69zW80.jpg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://aski-front.vercel.app/",
        },
      ],
    },
    {
      title: "EAE Interactive Solutions",
      dates: "May 19th - 21st, 2017",
      location: "İstanbul, Turkey",
      image: "https://www.eaeelectric.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feae-elektrik-logo.c571e196.webp&w=640&q=75",
      description:
        "React, Typescript teknolojileri kullanılarak kullanıcının interaktif bir şekilde gezinebileceği bir site hazırladım. Tamamen video ve görseller üzerinden oluşan siteye  lazy-loading ve dinamik yüklenmeler ile yüksek performans sağladım, bu şekilde kullanıcılar için yüksek video trafiği olan bir websitesi, yaratıcı ve keyifli bir deneyime dönüştürüldü.",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.eaeelectric.com/solutions",
        },
        {
          title: "Youtube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/shorts/lcHkZo0waW8",
        },
        {
          title: "Linkedin",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/eaegroup_discover-our-solutions-with-our-interactive-ugcPost-7201483082179252225-Va_B?utm_source=share&utm_medium=member_desktop&rcm=ACoAACz-cvEBpWPPUIfYQcHoKVg5iE4jQ1IncE8",
        },
      ],
    },

    {
      title: "EAE Coorporate",
      dates: "May 12th - 14th, 2017",
      location: "İstanbul, Turkey",
      image: "https://www.eaeelectric.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feae-elektrik-logo.c571e196.webp&w=640&q=75",
      description:
        "Şirkete Next.js, React ve TypeScript teknolojilerinin entegrasyonunda öncülük ettim. Modern mimariyle 30.000'den fazla kullanıcıya sorunsuz hizmet sunuldu. Kurumsal web siteleri için Figma ile baştan sona tasarım sistemleri oluşturarak süreçleri hızlandırdım.  \n\n40.000'i aşkın ürün çeşitliliği olan bir şirket için pratik teklif alma mekanizması içeren ürün bölümü tasarladım. Sunucu taraflı render ve statik site oluşturma teknikleriyle SEO performansını artırdım. CI/CD süreçlerindeki iyileştirmelerle geliştirme-üretim geçiş süresinde %70 tasarruf sağlandı.",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.eaeelectric.com/",
        },
      ],
    },
    {
      title: "Haunted House",
      dates: "May 5th - 7th, 2017",
      location: "Skopje, North Macedonia",
      image:
        "data:image/jpeg;base64,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",
      description:
        "Javascript, THREE.js ve WebGL teknolojileri ile hobi amaçlı bir çalışma oldu. Herhangi bir model kullanmadan, evler ve yapılar sadece geometri, hayalet hareketleri ise sinüs dalgası ile oluşturuldu. Gezinmeyi unutmayın. ☺️",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Karakannn/hauntedHouse",
        },
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://myhountedhouse.netlify.app/",
        },
      ],
    },
    {
      title: "Galaxy Generator",
      dates: "April 28th - 30th, 2017",
      location: "Skopje, North Macedonia",
      description:
        "Javascript, THREE.js ve WebGL ile hobi amaçlı özelleştirilebilir bir galaksi hazırlama sitesi geliştirdim. Partikül geometrisi ile birlikte farklı renk ve boyutlarla çeşitli varyasyonlar oluşturulabilme imkanı sunuldu. Girip karıştırmayı unutmayın. 🌌",
      image:
        "data:image/jpeg;base64,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",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Karakannn/galaxyGenerator",
        },
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://mygalaxygenerator.netlify.app/",
        },
      ],
    },
    {
      title: "Raptor",
      dates: "March 24th - 26th, 2017",
      location: "Skopje, North Macedonia",
      description:
        "Angular, Phaser.js, Typescript ve WebSocket teknolojileri ile birlikte RNG tabanlı, canlı kullanıcılarla etkileşime girebilecek sahneler ve animasyonlar tasarlandı. Farklı görseller rastgele şekilde kullanılarak uzay simülasyonu oluşturuldu.",
      image: "https://falcongaming.io/wp-content/uploads/2023/01/Raptor.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://falcongaming.io/",
        },
      ],
    },
    {
      title: "Bingo",
      dates: "March 4th - 5th, 2017",
      location: "Skopje, North Macedonia",
      description:
        "Svelte, Typescript, WebSocket ve WebRTC ile birlikte kullanıcıların kart satın aldığı ve takip edebildiği bir uygulama geliştirdim. Otomatik, Yummy ve Canlı olarak 3 farklı mod oluşturuldu. Yoğun WebSocket ve WebRTC teknolojileri kullanılarak kullanıcılara kusursuz bir deneyim sunuldu.",
      image: "https://falcongaming.io/wp-content/uploads/2023/01/Bingo-Tombala.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://falcongaming.io/",
        },
      ],
    },
    {
      title: "Shell Game",
      dates: "February 3rd - 5th, 2017",
      location: "Skopje, North Macedonia",
      description: "Angular, Typescript ve THREE.js kullanılarak 3 boyutlu eksiksiz bir sahne deneyimi hazırladım. Trigonometri ve Curve geometrileri kullanılarak sadece bardak numaraları vererek detaylı animasyonlar hazırladım. HMTL5 ile sahne ile etkileşime girilebilecek UI ile birlikte oyun geçmişi, miktar değişikliği, süre takibi gibi detaylı alanlar tasarladım. ",
      image: "https://falcongaming.io/wp-content/uploads/2023/01/Shell.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://falcongaming.io/",
        },
      ],
    },
    {
      title: "Stabit",
      dates: "Jan 11, 2021 - Apr 21, 2021",
      location: "Freelance",
      description: "Dubai bazlı firmaya, Laravel ile kripto para borsası yönetim paneli geliştirdik, şirketin ilk MVP ürününün lansmanında kritik rol oynadım. Karmaşık sorgular ve ilişkisel veritabanı mimarisi kullanarak SQL veritabanı yapıları oluşturdum, uygulama performansını ve veri bütünlüğünü iyileştirdim. \n\nGüvenli işlem protokolleri ve finansal API'ler ile çalışarak Paxos kripto para ödeme sistemi entegrasyonunu gerçekleştirdim, kullanıcılara güvenli ve sorunsuz finansal işlem imkanları sağladım.",
      image:
        "data:image/jpeg;base64,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",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://stabit.com/",
        },
      ],
    },
    {
      title: "nQodit",
      dates: "Nov 15, 2020 - Dec 8, 2020",
      location: "Freelance",
      description: "USA bazlı bir firmaya, HTML, CSS ve Javascript ile birlikte yoğun animasyon ve efektlerin olduğu bir SPA (Single Page Application) tasarlayıp kodladım.",
      image:
        "data:image/png;base64,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",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Karakannn/nQodit",
        },
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://nqod.it/index.htm",
        },
      ],
    },
  ],
} as const;
