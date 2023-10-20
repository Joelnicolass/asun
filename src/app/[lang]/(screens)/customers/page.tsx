import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { Reveal } from '../../components/reveal/reveal';

const Customers = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const { page } = await getDictionary(lang);
  return (
    <div className='flex flex-col items-center justify-between p-24 no-scrollbar'>
      <Reveal slideColor={''}>
        <h1 className='text-3xl font-bold'>{page.customers.title}</h1>
      </Reveal>
      <Reveal slideColor={''}>
        <h2 className='text-3xl font-bold'>{page.customers.description}</h2>
      </Reveal>
    </div>
  );
};

export default Customers;
