import Card from '@/components/card/card';
import Footer from '@/components/footer/footer';
import { Suspense } from 'react'
import CardLoader from '@/components/cardLoader/cardLoader';
import styles from './page.module.scss'

// export const fetchCache = 'force-no-store'
export const revalidate = 0
export const dynamic = 'force-dynamic'

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
