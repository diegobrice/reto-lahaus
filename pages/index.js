import Layout from '../components/Layout';
import useAppContext from '../context/state';

export default function Home() {
  const {
    appState: { list },
    isLoading,
  } = useAppContext();

  return (
    <Layout>
      <h1>LaHaus</h1>
    </Layout>
  );
}
