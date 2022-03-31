import Head from 'next/head';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>LaHaus</title>
        <meta
          name="description"
          content="¿Buscas una inmobiliaria? Tenemos una buena noticia, somos mucho más. La tecnología y oferta de finca raíz harán más fácil la compra de tu vivienda nueva."
        />
        <link rel="preload" href="fonts/silka-regular-webfont.ttf" as="font" crossOrigin="" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
