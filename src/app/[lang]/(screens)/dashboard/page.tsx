import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import dynamic from 'next/dynamic';
import AppButton from '../../components/button/button';
import { Reveal } from '../../components/reveal/reveal';

const ServerButton = dynamic(() => import('../../components/button/button'), {
  loading: () => <p>Loading...</p>,
});
const Dashboard = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const { page } = await getDictionary(lang);
  return (
    <div className='flex flex-col items-start pl-3 sm:pl-5 justify-between no-scrollbar'>
      <Reveal slideColor={''}>
        <h1 className='text-2xl text-black md:text-3xl py-2 text-start md:pl-10 w-full sm:max-w-lg'>
          {page.dashboard.title}
        </h1>
      </Reveal>
      <Reveal slideColor={''}>
        <AppButton color='success' variant='bordered'>
          {page.dashboard.title_button}
        </AppButton>
      </Reveal>
    </div>
  );
};

export default Dashboard;
