import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const Contact = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { page } = await getDictionary(lang);
  return (
    <div className='flex flex-col items-center justify-between p-24 no-scrollbar'>
      <h1 className='text-3xl font-bold'>{page.contact.title}</h1>
      <h2 className='text-3xl font-bold'>{page.contact.description}</h2>
    </div>
  );
};

export default Contact;
