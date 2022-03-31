import Layout from '../components/Layout';
import Image from 'next/image';
import img404 from '../public/images/404-gray.png';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout>
      <section className="not-found">
        <div className="container">
          <h1>¡Oops! Has abierto una puerta que no lleva a ningún lado</h1>
          <h2>Apartamento 404. Este link no existe.</h2>
          <div className="image-container">
            <Image src={img404} alt="404 not found" layout="fill" objectFit="contain" />
          </div>
          <Link href="/" passHref>
            <div className="button">Ir al Inicio</div>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
