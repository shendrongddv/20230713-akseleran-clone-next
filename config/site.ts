import { Github } from "lucide-react";

export const siteConfig = {
  name: "Akseleran | Fintech P2P Lending Indonesia",
  description:
    "Akseleran adalah platform crowdfunding P2P Lending Indonesia yang menghubungkan UKM yang membutuhkan pinjaman untuk mengembangkan usahanya.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
};

export const siteMainNav = [
  {
    id: 1,
    label: "Beri Pinjaman",
    href: "beri-pinjaman",
  },
  {
    id: 2,
    label: "Ajukan Pinjaman",
    href: "ajukan-pinjaman",
  },
  {
    id: 3,
    label: "Tentang Kami",
    href: "tentang-kami",
  },
  {
    id: 4,
    label: "Blog",
    href: "blog",
  },
];

export const siteSocials = [
  {
    label: Github,
    icon: Github,
    href: "https://github.com/shendrongddv",
  },
];
