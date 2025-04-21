import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Emin",
  fullName: "Mehmet Emin Karakan",
  initials: "MEK",
  url: "https://mehmeteminkarakan.vercel.app",
  location: "İstanbul/Türkiye",
  description: "Kod yazmayı, kullanıcı deneyimini tasarlamayı ve sürekli öğrenmeyi seviyorum. Frontend ağırlıklı full-stack geliştirici.",
  summary:
    "2017'de başladığım yolculukta [JavaScript ve TypeScript](#education) tarafında uzmanlaştım. Bugünlerde çoğunlukla [Next.js ve React](#education) ile uğraşıyorum. Daha önceden [2D/3D oyun geliştirme alanında çalıştım](#education) ve [birçok uluslararası projede bulundum](#education). En büyük prensibim ['çalışsın'](#education) demek yerine kaliteli kod yazmak, bu yüzden sürekli araştırmaya ve güncel kalmaya çalışıyorum. Yazılımın gittiği yeri takip etmek beni her zaman heyecanlandırıyor. Özellikle de [karmaşık sorunları alıp bunları yazılım ile çözmeyi](#education) gerçekten seviyorum.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D4D03AQFiHN-CMpftjQ/profile-displayphoto-shrink_200_200/B4DZZTclwlGwAg-/0/1745156726332?e=1750896000&v=beta&t=lDueo2H6O90eqJptG2mWn3gGEgVnlePaKJ_96K5Pp58",
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
        url: "https://github.com/Karakannn",
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
} as const;
