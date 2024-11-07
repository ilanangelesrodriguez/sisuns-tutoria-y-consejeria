export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "SISUNS: Sistema de Tutoría y Consejería",
  description: "Sistema de tutoría y consejería para la escuela de Ingeniería de Sistemas e Informática en la Universidad Nacional del Santa",
  navItems: [
    {
      label: "Inicio",
      href: "/",
      type: "main",
    },
    {
      label: "Blog",
      href: "/blog",
      type: "main",
    },
    {
      label: "Nosotros",
      href: "/nosotros",
      type: "main",
    },

    //TIPO BUTTON---ELIMINAR
    {
      label: "Nosotros",
      href: "/nosotros",
      type: "btn",
    },
    {
      label: "Login",
      href: "/login",
      type: "btn",
    },

    //TIPO MENU
    {
      label: "Profile",
      href: "/profile",
      type: "menu", 
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      type: "menu",
    },
    {
      label: "Settings",
      href: "/settings",
      type: "menu",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
      type: "menu",
    },
    {
      label: "Logout",
      href: "/logout",
      type: "menu",
    },
  ],
  links: {
    github: "https://github.com/ilanangelesrodriguez/sisuns-tutoria-y-consejeria",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.com/channels/1292322901017628723/1292326564452896789",
  },
};
