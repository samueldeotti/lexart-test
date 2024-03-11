import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import { SearchTypeProps } from '../../types/SearchTypeProps';
import NecessaryLogin from '../../Components/NecessaryLogin/NecessaryLogin';

export default function Layout(props: SearchTypeProps) {
  const { search, handleChange } = props;

  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem('token');
    if (!tokenLocalStorage) {
      setIsLogged(false);
      setIsLoading(false);
      return;
    }
    setIsLogged(true);
    setIsLoading(false);
  }, [navigate]);

  console.log('isLogged', isLogged, 'isLoading', isLoading);

  return (
    isLogged ? (
      <div className="content">
        <Header search={ search } handleChange={ handleChange } />
        <main>
          <Outlet />
        </main>
      </div>
    ) : (
      !isLoading && (
        <NecessaryLogin />
      )

    )
  );
}
