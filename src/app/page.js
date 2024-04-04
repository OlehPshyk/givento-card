import Card from '@/components/card/card';
import Footer from '@/components/footer/footer';
import { Suspense } from 'react'
import CardLoader from '@/components/cardLoader/cardLoader';
import styles from "./page.module.css";

export const revalidate = 0
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.cardContainer}>
        <Suspense fallback={<CardLoader />}>
          <Card
            id= {null}
            delay= {500}
          />
        </Suspense>
      </div>
      <Footer/>
    </main>
  );
}
