import TapIcon from '../../assets/images/tap_icon.svg';
import { API_URL } from "@/utils/constants";
import { getCardDetails } from "@/utils/services";
import pauseFunction from '@/utils/helpers';
import card from './card.module.scss';


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
    <>
      <input id="cardCheckbox" type="checkbox" className={card.cardCheckbox}/>
      <label htmlFor="cardCheckbox" className={card.card}>
        <div className={card.cardContainer}>
          <div className={`${card.text} ${card[allignClass(data?.align)]}`} style={{fontFamily:formatFont(card.font)}}>
            {data?.text || "some text here..."}
          </div>
        </div>
        <div className={card.flipped}></div>
        <div className={card.unflipped}>
          <img className={card.image} src={imageSrc} alt="card" />
        </div>
      </label>
      <label htmlFor="cardCheckbox" className={card.cardTapLabel}>
        <TapIcon/>
        <span>Tap to</span>
        <span className={card.cardTapLabelOpen}>Open</span>
        <span className={card.cardTapLabelClose}>Close</span>
      </label>
    </>
  )
}
export default Card;
