import Card from '@/components/card/card';
import Footer from '@/components/footer/footer';
import { getCardDetails } from "@/utils/services";
import styles from './page.module.scss'

// export const fetchCache = 'force-no-store'
export const revalidate = 0
export const dynamic = 'force-dynamic'

export default async function CardId({params}) {
  const {id} = params;
  const cardDetails = await getCardDetails(id)
  return (
    <main className={styles.main}>
      <div className={styles.cardContainer}>
        <Card
          data= {cardDetails}
        />
      </div>
      <Footer/>
    </main>
  )
}
