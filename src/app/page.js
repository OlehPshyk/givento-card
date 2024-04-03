import Card from '@/components/card/card';
import Footer from '@/components/footer/footer';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.cardContainer}>
        <Card/>
      </div>
      <Footer/>
    </main>
  );
}
