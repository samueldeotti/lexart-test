import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [search, setSearch] = useState('');

  const location = useLocation();

  return (
    <nav>
      <p>AmperCell</p>
      <ul>
        {location.pathname === '/products' ? (
          <>
            <label htmlFor="search">
              Lupa
              <input
                type="text"
                name="search"
                id="search"
                value={ search }
                onChange={ (e) => setSearch(e.target.value) }
              />
            </label>
            <li><Link to="/add-product">add</Link></li>
          </>
        ) : (<li><Link to="/products">Products</Link></li>)}
        {/* arrumar rota, COLOCAR FUNÇÃO ON CLICK AQUI */}
        <li><Link to="/login">Log Out</Link></li>
      </ul>
    </nav>
  );
}
