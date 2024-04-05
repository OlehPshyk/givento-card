import { API_URL } from "@/utils/constants";
import CardCSR from '@/components/cardCSR/cardCSR'
import { getCardDetails } from "@/utils/services";
import pauseFunction from '@/utils/helpers';


const allignClass = (align) => {
  switch(align) {
    case "Central":
      return "x-center";
    case "Left":
      return "x-left";
    case "Right":
      return "x-right";
    default:
      return "x-center"
  }
}

const formatFont = (font) => {
  switch(font) {
    case "Sriracha":
      return "Sriracha";
    case "Alice":
      return "Alice";
    case "Futura":
      return "Futura";
    default:
      return "Sriracha"
  }
}

const Card = async ({id, delay}) => {
  let data = null
  if (id) {
    data = await getCardDetails(id)
    const pause = await pauseFunction(delay);
  }
  const imageSrc = data?.coverLink ? `${API_URL}/${data.coverLink}` : "/images/dummy_img.png"

  return (
    <CardCSR
      imageSrc={imageSrc}
      text={data?.text || "some text here..."}
      xalign={allignClass(data?.align)}
      font={formatFont(data.font)}
    />
  )
}
export default Card;
