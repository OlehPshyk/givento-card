import Loading from '@/components/loading/loading';
import TapIcon from '../../assets/images/tap_icon.svg';
import card from '@/components/card/card.module.scss';

const CardLoader = () => {
  return (
    <>
      <label htmlFor="cardCheckbox" className={card.card}>
        <div className={card.cardContainer}></div>
        <div className={card.flipped}><Loading /></div>
      </label>
      <label htmlFor="cardCheckbox" className={card.cardTapLabel}>
        <TapIcon/>
        <span>Tap to</span>
        <span>Open</span>
      </label>
    </>
  )
}
export default CardLoader;
