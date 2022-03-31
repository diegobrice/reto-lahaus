import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import useAppContext from '../../context/state';

const FavoritePage = () => {
  const [favoriteList, setfavoriteList] = useState();
  const {
    appState: { favorites },
  } = useAppContext();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (favorites) {
      const favorite = favorites.find((favorite) => favorite.id === id);
      setfavoriteList(favorite);
    }
  }, [id, favorites]);

  if (!favoriteList) return <p>Loading</p>;

  const emptyList = favoriteList.real_estate_list.length === 0;

  return (
    <Layout>
      <div className="favorite">
        <div className="container">
          <h1>{favoriteList.attributes.name}</h1>
          {emptyList && (
            <div className="empty--list">
              <p>Aun no tienes propiedades guardadas en esta lista de favoritos</p>
            </div>
          )}
          <section className="grid">
            {favoriteList.real_estate_list.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </section>
          <Link href="/favoritos" passHref>
            <div className="button">Volver</div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default FavoritePage;
