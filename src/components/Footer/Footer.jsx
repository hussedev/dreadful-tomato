import logo from '../../assets/logo.png';
import appStore from '../../assets/app store.png';
import googlePlay from '../../assets/google-play.png';
import './Footer.scss';
const Footer = () => {
  return (
    <div className='footer'>
      <img className='logo-footer' src={logo} alt='logo' />
      <div className='links'>
        <a href='/'>Home</a>
        <a href='/'>Terms of Use</a>
        <a href='/'>Legal Notices</a>
        <a href='/'>Help</a>
        <a href='/'>Manage Account</a>
      </div>
      <div className='stores'>
        <img className='app-store' src={appStore} alt='app store' />
        <img className='google-play' src={googlePlay} alt='google play' />
      </div>
      <p className='copyright'>
        Copyright 2020 Dreadfull Tomato Streaming. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
