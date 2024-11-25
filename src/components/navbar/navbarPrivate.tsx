'use client'

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
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/themeSwitch";
import { Logo } from "@/components/icons";
import { LogOut, Settings, HelpCircle, Bell } from 'lucide-react';

export const NavbarPrivate = ({ userAvatar = "", userName = "User", userEmail = "user@example.com" }) => {
  return (
    <NextUINavbar 
      maxWidth="xl" 
      position="sticky"
      className="bg-background/60 backdrop-blur-lg border-b border-divider"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link className="flex justify-start items-center gap-2" href="/dashboard">
            <Logo />
            <p className="font-bold text-inherit text-lg">Tutoría y Consejería</p>
          </Link>
        </NavbarBrand>
        <div className="hidden sm:flex gap-4 justify-start ml-4">
          {siteConfig.navItems.filter(item => item.type === "user").map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium text-base hover:text-primary transition-colors",
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
        <NavbarItem className="hidden sm:flex gap-4">
          <ThemeSwitch />
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button isIconOnly variant="light" className="text-lg">
                <Bell size={20} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Notifications" variant="flat">
              <DropdownItem key="new_update" description="We have a new update!">
                New Update
              </DropdownItem>
              <DropdownItem key="new_message" description="You have a new message.">
                New Message
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name={userName}
                size="sm"
                src={userAvatar}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{userEmail}</p>
              </DropdownItem>
              <DropdownItem key="settings" startContent={<Settings size={16} />}>My Settings</DropdownItem>
              <DropdownItem key="help_and_feedback" startContent={<HelpCircle size={16} />}>Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger" startContent={<LogOut size={16} />}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={userName}
              size="sm"
              src={userAvatar}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{userEmail}</p>
            </DropdownItem>
            <DropdownItem key="settings" startContent={<Settings size={16} />}>My Settings</DropdownItem>
            <DropdownItem key="help_and_feedback" startContent={<HelpCircle size={16} />}>Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" startContent={<LogOut size={16} />}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.filter(item => item.type === "user").map((item) => (
            <NavbarMenuItem key={item.href}>
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
            </NavbarMenuItem>
          ))}
          <div className="border-t border-divider my-2"></div>
          <NavbarMenuItem>
            <div className="flex items-center justify-start">
              <span className="mr-2 text-sm text-foreground-500">Cambiar tema</span>
              <ThemeSwitch />
            </div>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};