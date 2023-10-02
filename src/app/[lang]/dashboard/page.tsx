import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const Dashboard = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const { page } = await getDictionary(lang);
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-3xl font-bold'>{page.about.title}</h1>
      <h2 className='text-3xl font-bold'>{page.about.description}</h2>
    </div>
  );
};

export default Dashboard;
