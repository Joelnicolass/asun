import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Link from 'next/link'
import LocaleSwitcher from './locale-switcher'

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className='py-6 fixed bg-opacity-20 bg-neutral-950 w-full'>
      <nav className='flex items-center justify-between px-5'>
        <ul className='flex gap-x-8'>
          <li className='text-white border-b-2 border-b-transparent hover:border-b-white transition-all'>
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          <li className='text-white border-b-2 border-b-transparent hover:border-b-white transition-all'>
            <Link href={`/${lang}/dashboard`}>{navigation.about}</Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  )
}