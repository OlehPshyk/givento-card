import AppStoreIcon from '../../assets/images/app_store_icon.svg';
import MadeIcon from '../../assets/images/made_logo.svg';
import footer from './footer.module.scss';

const Footer = () => (
  <footer className={footer.footer}>
    <MadeIcon className={footer.madeIcon}/>
    <a href="#" target="_blank" className={footer.appStoreIconLink}>
      <AppStoreIcon className={footer.appStoreIcon}/>
    </a>
  </footer>
)
export default Footer;
