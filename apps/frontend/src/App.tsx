import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/sign-up" element={ <SignUp /> } />
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/products" element={ <Layout /> }>
        <Route index element={ <Home /> } />
      </Route>
    </Routes>
  );
}

export default App;
