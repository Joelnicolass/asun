import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
export default async function Home({
  params: {lang}
}: {
  params: {lang: Locale}
}) {
  const {page} = await getDictionary(lang)

  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h1 className='text-3xl font-bold text-white'>{page.dashboard.title}</h1>
    </div>
  );
}
