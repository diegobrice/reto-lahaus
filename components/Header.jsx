import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logo.png';
import logoMobile from '../public/images/logo-mobile.png';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link href="/" passHref>
          <a>
            <div className="header__logo">
              <Image src={logo} alt="logo LaHaus" width={125} height={25} />
            </div>
            <div className="header__logo--mobile">
              <Image src={logoMobile} alt="logo LaHaus" width={32} height={32} />
            </div>
          </a>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
