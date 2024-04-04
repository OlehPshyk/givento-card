import AppStoreIcon from '../../assets/images/app_store_icon.svg';
import MadeIcon from '../../assets/images/made_logo.svg';
import footer from './footer.module.scss';

const Footer = () => (
  <footer className={footer.footer}>
    <a href="https://givento.io" target="_blank">
      <MadeIcon className={footer.madeIcon}/>
    </a>
    <a href="https://apps.apple.com/us/app/birthday-countdown-reminder/id1640049062" target="_blank" className={footer.appStoreIconLink}>
      <AppStoreIcon className={footer.appStoreIcon}/>
    </a>
  </footer>
)
export default Footer;
