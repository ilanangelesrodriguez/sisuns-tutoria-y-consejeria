import { Link } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/themeSwitch";
import { IconLogIn } from "@/components/icons";
import { Logo } from "@/components/icons";
import SearchInput from "./searchInput";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">

      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link className="flex justify-start items-center gap-1" color="foreground" href="/">
            <Logo />
            <p className="font-bold text-inherit">Tutoría y Consejería</p>
          </Link>
        </NavbarBrand>
        <div className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.filter(item => item.type === "main").map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">       
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
          {
            siteConfig.navItems.filter(item => item.type === "btn" && item.label === "Login").map((item) =>(
                <Link href={item.href} title="Login">
                  <IconLogIn className="text-default-500" />
                </Link>    
            ))
          }

        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">
          <SearchInput /> 
        </NavbarItem> */}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {
            siteConfig.navItems.filter(item => item.type === "btn" && item.label === "Login").map((item) =>(
                <Link href={item.href} title="Login">
                  <IconLogIn className="text-default-500" />
                </Link> 
            ))
          }
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.filter(item => item.type === "main").map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({color: "foreground"}),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color = "foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        {/* Separador visual */}
        <div className="border-t border-gray-300 my-2"></div>

        {/* Alineación y estilo de ThemeSwitch */}
        <div className="flex items-center justify-start">
          <ThemeSwitch className="text-default-500 mx-2" />
          <span className="ml-2 text-sm text-gray-500">Cambiar tema</span>
        </div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
