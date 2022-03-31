import List from '../../components/List';
import Layout from '../../components/Layout';
import useAppContext from '../../context/state';
import NewList from '../../components/NewListCard';

export default function Favoritos() {
  const {
    appState: { favorites },
    isLoading,
  } = useAppContext();

  return (
    <Layout>
      <div className="favorites">
        <div className="container">
          <h1>Listas de Favoritos</h1>
          <section className="grid">
            {favorites &&
              favorites.map((favoriteList) => {
                return <List key={favoriteList.id} favoriteList={favoriteList} />;
              })}
            {favorites && <NewList />}
          </section>
        </div>
      </div>
    </Layout>
  );
}
