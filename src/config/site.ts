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
    {
      label: "Contactos",
      href: "/contactos",
      type: "main",
    },
    {
      label: "Iniciar Sesión",
      href: "/iniciarSesion",
      type: "main",
    },
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

    docs: "https://nextui-docs-v2.vercel.app"
  },
};
