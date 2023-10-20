'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useMediaQuery } from '../../_hooks/useMediaQuery';
import { AsunLogo } from '../asun_logo/asun_logo';
import LocaleSwitcher from '../locale_switcher.tsx/locale_switcher';
interface Navigation {
  routeName: string;
  route: string;
}
export default function Header({
  navigation,
  lang,
}: {
  navigation: Navigation[];
  lang: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSM = useMediaQuery(646);
  const currentRoute = usePathname();

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className='px-0 mx-auto w-view'
    >
      <NavbarContent>
        <NavbarBrand>
          <AsunLogo />
          <p className='font-bold text-inherit'>ASUN</p>
        </NavbarBrand>
        <NavbarMenuToggle aria-label={'Close menu'} className='sm:hidden' />
      </NavbarContent>

      <NavbarContent className='hidden sm:flex sm:gap-4' justify='center'>
        {navigation.map((item) => (
          <NavbarItem
            key={item.route}
            isActive={currentRoute == `/${lang}/${item.route}` ? true : false}
          >
            <Link
              color='foreground'
              href={`/${lang}/${item.route}`}
              className='text-small sm:text-medium'
            >
              {item.routeName}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {!isSM && <LocaleSwitcher side='end' />}
      <NavbarMenu className='scrollbar-hide'>
        {navigation.map((item, index: number) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color='foreground'
              className='w-full'
              href={`/${lang}/${item.route}`}
            >
              {item.routeName}
            </Link>
          </NavbarMenuItem>
        ))}
        <div>
          <LocaleSwitcher side='start' />
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
