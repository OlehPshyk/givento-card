import Image from 'next/image'
import loading from '@/assets/images/loading.gif';
import styles from './loading.module.scss';

const Loading = () =>  {
  return <Image
    src={loading}
    alt="loading"
    width={250}
    height={141}
    className={styles.loading}
    priority
  />
}

export default Loading;
