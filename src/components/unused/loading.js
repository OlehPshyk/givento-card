import Image from 'next/image'
import loading from '@/assets/images/loading.gif';

const Loading = () =>  {
  return <Image
    src={loading}
    alt="loading"
    width={250}
    height={141}
    priority
  />
}

export default Loading;
