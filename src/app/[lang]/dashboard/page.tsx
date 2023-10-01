import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionary"

const Dashboard = async ({
  params: { lang }
}: {
  params: { lang: Locale }
}) =>{
  const { page } = await getDictionary(lang)
  return (
    <div>{page.home.description}</div>
  )
}

export default Dashboard