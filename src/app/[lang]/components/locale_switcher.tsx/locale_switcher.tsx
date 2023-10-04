'use client'

import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


import { i18n } from '@/i18n.config';

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <NavbarContent justify="end">
      {i18n.locales.map(locale => {
        return (
          <NavbarItem key={locale} className="hidden lg:flex hover:opacity-75" isActive={pathName.split('/')[1] == locale ? true : false} >
            <Link
              color='foreground'
              href={redirectedPathName(locale)}
            >
              {locale}
            </Link>
          </NavbarItem>
        )
      })}
    </NavbarContent>
  )
}
{/* <NavbarContent justify="end">
  <NavbarItem className="hidden lg:flex">
    <Link href="#">Login</Link>
  </NavbarItem>
  <NavbarItem>
    <Button as={Link} color="success" href="#" variant="flat">
      ES
    </Button>
  </NavbarItem>
</NavbarContent> */}