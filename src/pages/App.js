import useAuthStore from '../app/store/useAuthStore';
import { Routes, Route } from 'react-router-dom'
import Layout from "../components/Layout";
import Auth from './Auth';
import Main from './Main';

const App = () => {
  const authed = useAuthStore((state) => state.isLogin)

  const router = authed ? <Main /> : <Auth />

  return (
    <Layout>
      <Routes>
        <Route path='/' element={router} />
      </Routes>
    </Layout>
  );
};

export default App;
