import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [search, setSearch] = useState('');

  return (
    <nav>
      <p>AmperCell</p>
      <ul>
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
        <li><Link to="/">add</Link></li>
        <li><Link to="/">edit</Link></li>
        <li><Link to="/login">Sign Up/Sign In</Link></li>
        {/* arrumar rota, COLOCAR FUNÇÃO ON CLICK AQUI */}
        <li><Link to="/">Log Out</Link></li>
      </ul>
    </nav>
  );
}
