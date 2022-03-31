import Layout from '../components/Layout';
import Card from '../components/Card';
import useAppContext from '../context/state';
import SkeletonCard from '../skeletons/SkeletonCard';

export default function Home() {
  const {
    appState: { list },
    isLoading,
  } = useAppContext();

  return (
    <Layout>
      <div className="home">
        <div className="container">
          <h1>Hoy se compra casa nueva en LaHaus.</h1>
          {isLoading && <SkeletonCard />}
          {list && (
            <section className="grid">
              {list.map((item) => {
                return <Card key={item.id} item={item} />;
              })}
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
}
