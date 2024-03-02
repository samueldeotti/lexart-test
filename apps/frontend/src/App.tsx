import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import AddProcuct from './pages/AddProcuct/AddProcuct';
import EditProduct from './pages/EditProduct/EditProduct';

function App() {
  const [search, setSearch] = useState('');
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/sign-up" element={ <SignUp /> } />
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route
        path="/"
        element={
          <Layout search={ search } handleChange={ handleSearch } />
        }
      >
        <Route path="products" element={ <Home search={ search } /> } />
        <Route path="/add-product" element={ <AddProcuct /> } />
        <Route path="/edit-product/:id" element={ <EditProduct /> } />
      </Route>
    </Routes>
  );
}

export default App;
