import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Inicio",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Sobre",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Contato",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Navegação",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Sobre",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contato",
        path: "/contact",
        newTab: false,
      },
      {
        id: 46,
        title: "Entrar",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Cadastre-se",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Erro",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
