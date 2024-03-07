import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import { SearchTypeProps } from '../../types/SearchTypeProps';
import { LayoutContainer } from './LayoutStyle';

export default function Layout(props: SearchTypeProps) {
  const { search, handleChange } = props;

  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem('token');
    if (!tokenLocalStorage) {
      setIsLogged(false);
      return;
    }
    setIsLogged(true);
  }, [navigate]);

  return (
    isLogged ? (
      <div className="content">
        <Header search={ search } handleChange={ handleChange } />
        <main>
          <Outlet />
        </main>
      </div>
    ) : (
      <LayoutContainer className="content">
        <main>
          <h1>Para continuar faça login</h1>
          <Link to="login">Login</Link>
        </main>
      </LayoutContainer>
    )
  );
}
