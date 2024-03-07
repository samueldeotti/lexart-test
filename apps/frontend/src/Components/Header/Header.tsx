import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';
import { SearchTypeProps } from '../../types/SearchTypeProps';

export default function Header(props: SearchTypeProps) {
  const { handleChange } = props;

  const location = useLocation();

  const [searchLocal, setSearchLocal] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    handleChange(searchLocal);
  };

  return (
    <nav>
      <Link to="/products">Storage</Link>
      <ul>
        {location.pathname === '/products' ? (
          <>
            <form onSubmit={ handleSearch }>
              <label htmlFor="search">
                Search
                <input
                  type="text"
                  name="search"
                  id="search"
                  value={ searchLocal }
                  onChange={ (e) => setSearchLocal(e.target.value) }
                />
              </label>
              <button type="submit">aaa</button>
            </form>
            <li><Link to="/add-product">add</Link></li>
          </>
        ) : (<li><Link to="/products">Products</Link></li>)}
        <li>
          <Link
            to="/login"
            onClick={ () => localStorage.removeItem('token') }
          >
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
  );
}
