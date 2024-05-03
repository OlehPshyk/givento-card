import Card from '@/components/card/card';
import { getCardDetails } from "@/utils/services";
import Footer from '@/components/footer/footer';
import { Suspense } from 'react'
import CardLoader from '@/components/cardLoader/cardLoader';
import styles from './page.module.scss'

// export const fetchCache = 'force-no-store'
export const revalidate = 0
export const dynamic = 'force-dynamic'


export async function generateMetadata({ params } ) {
  const {id} = params;
  const {name} = await getCardDetails(id)
  return {
    title: `${name} sent you a card via Givento.io`,
    description: `${name} sent you a card via Givento.io`
  }
}

export default async function CardId({params}) {
  const {id} = params;
  return (
    <main className={styles.main}>
      <div className={styles.cardContainer}>
        <Suspense fallback={<CardLoader />}>
          <Card
            id= {id}
            delay= {500}
          />
        </Suspense>
      </div>
      <Footer/>
    </main>
  )
}
