import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import barsImg from '../public/images/bars.png';

const Navbar = () => {
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState();
  const DESKTOP_WIDTH = 992;

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const isActive = (href) => (router.pathname == href ? 'active' : '');

  return (
    <nav>
      <div className="bar" onClick={toggleNav}>
        <Image src={barsImg} alt="menu" width={32} height={32} />
      </div>
      {(toggleMenu || screenWidth > DESKTOP_WIDTH) && (
        <ul onClick={toggleNav}>
          <li>
            <Link href="/">
              <a className={isActive('/')}>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/favoritos">
              <a className={isActive('/favoritos')}>Favoritos</a>
            </Link>
          </li>
          <li>
            <Link href="/cundinamarca">
              <a className={isActive('/cundinamarca')}>Cundinamarca</a>
            </Link>
          </li>
          <li>
            <Link href="/antoquia">
              <a className={isActive('/antoquia')}>Antoquia</a>
            </Link>
          </li>
          <li>
            <Link href="/recursos">
              <a className={isActive('/recursos')}>Recursos</a>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
