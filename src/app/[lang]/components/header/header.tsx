
"use client"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/navbar";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { AsunLogo } from "../asun_logo/asun_logo";
import LocaleSwitcher from "../locale_switcher.tsx/locale_switcher";

export default function Header({ navigation, lang }: { navigation: {home: string; about: string;}, lang: string }) {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const currentRoute = usePathname();
  const menuItems = [
    "Dashboard",
    "Customers",
    "About us",
    "Contact",
  ];

  return (
    <Navbar
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={"Close menu" }
          className="sm:hidden"
        />
        <NavbarBrand>
          <AsunLogo />
          <p className="font-bold text-inherit">ASUN</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive= {currentRoute == `/${lang}/dashboard` ? true : false}>
          <Link color="foreground" href={`/${lang}/dashboard`}>
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem isActive= {currentRoute == `/${lang}/customers` ? true : false}>
          <Link href={`/${lang}/customers`} aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem isActive= {currentRoute == `/${lang}/about-us` ? true : false}>
          <Link color="foreground" href={`/${lang}/about-us`}>
          About us
          </Link>
        </NavbarItem>
        <NavbarItem isActive= {currentRoute == `/${lang}/contact` ? true : false}>
          <Link color="foreground" href={`/${lang}/contact`}>
           Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
        <LocaleSwitcher/>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={`/${lang}/${item.split(' ').join('-').toLowerCase()}`}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
    // <header className='py-6 absolute top-0 bg-opacity-20 bg-neutral-950 w-full'>
    //   <nav className='flex items-center justify-between px-5'>
    //     <ul className='flex gap-x-8'>
    //       <li className='text-white border-b-2 border-b-transparent hover:border-b-white transition-all'>
    //         <Link href={`/${lang}`}>{navigation.home}</Link>
    //       </li>
    //       <li className='text-white border-b-2 border-b-transparent hover:border-b-white transition-all'>
    //         <Link href={`/${lang}/dashboard`}>{navigation.about}</Link>
    //       </li>
    //     </ul>
    //     <LocaleSwitcher />
    //   </nav>
    // </header>



