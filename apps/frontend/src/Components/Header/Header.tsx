import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { SearchTypeProps } from '../../types/SearchTypeProps';

export default function Header(props: SearchTypeProps) {
  const { search, handleChange } = props;

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
                onChange={ handleChange }
              />
            </label>
            <li><Link to="/add-product">add</Link></li>
          </>
        ) : (<li><Link to="/products">Products</Link></li>)}
        {/* arrumar rota, COLOCAR FUNÇÃO ON CLICK AQUI */}
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
