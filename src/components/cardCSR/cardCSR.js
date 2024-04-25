"use client"

import {useState} from 'react';
import Image from 'next/image'
import Loading from '@/components/loading/loading';
import TapIcon from '../../assets/images/tap_icon.svg';

import card from './cardCSR.module.scss';

const CardCSR = ({imageSrc, text, xalign, font}) => {
  const [cardReviewed, setCardReviewed] = useState(false)
  const [imageLoading, setImageLoading] = useState(true);
  const handleCardClick = () => {
    // alert("Clicked card!");
    setCardReviewed(true);
  }
  // Safari problem onLoad when image already in cache
  const uniqQuery = (new Date).getTime()
  const uniqueImgSrc = `${imageSrc}?${uniqQuery}`
  const handleImageLoaded = () => {
    setTimeout(() => setImageLoading(false), 500)
  }
  return (
    <>
      <input id="cardReviewedCheckbox" type="checkbox" className={card.cardReviewedCheckbox} checked={cardReviewed}/>
      <input id="cardCheckbox" type="checkbox" className={card.cardCheckbox}/>
      <label htmlFor="cardCheckbox" className={card.card} onClick={handleCardClick}>
        <div className={card.cardContainer}>
          <div className={`${card.text} ${card[xalign]}`} style={{fontFamily:font}}>
            {text}
          </div>
        </div>
        <div className={card.flipped}></div>
        <div className={card.unflipped}>
          <img
            className={`${card.image} ${imageLoading ? '' : card.active}`}
            src={uniqueImgSrc}
            alt="card"
            onLoad={handleImageLoaded}
          />
          <div className={`${card.loader} ${imageLoading ? card.active : ''}`}>
            <Loading/>
          </div>
        </div>
      </label>
      <label htmlFor="cardCheckbox" className={card.cardTapLabel} onClick={handleCardClick}>
        <TapIcon/>
        <span>Tap to</span>
        <span className={card.cardTapLabelOpen}>Open</span>
        <span className={card.cardTapLabelClose}>Close</span>
      </label>
    </>
  )
}
export default CardCSR;
