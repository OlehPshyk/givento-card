import TapIcon from '../../assets/images/tap_icon.svg';
import card from './card.module.scss';


const Card = () => (
  <>
    <input id="cardCheckbox" type="checkbox" className={card.cardCheckbox}/>
    <label htmlFor="cardCheckbox" className={card.card}>
      <div className={card.cardContainer}>
        <div className={card.text}>
          Happy Birthday, Edgar! Wishing you a day as awesome as you are. May it be filled with good vibes, lots of fun, and some epic surprises.
        </div>
      </div>
      <div className={card.flipped}></div>
      <div className={card.unflipped}>
        <img className={card.image} src="/images/dummy_img.png" alt="card" />
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
export default Card;
