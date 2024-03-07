import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SearchTypeProps } from '../../types/SearchTypeProps';
import { HeaderContainer, Nav } from './HeaderStyle';

export default function Header(props: SearchTypeProps) {
  const { handleChange } = props;

  const [searchLocal, setSearchLocal] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    handleChange(searchLocal);
  };

  return (
    <HeaderContainer>
      <Nav>
        <ul>
          <li><Link to="/products">Storage</Link></li>
          <form onSubmit={ handleSearch }>
            <input
              type="text"
              name="search"
              id="search"
              value={ searchLocal }
              placeholder="Search"
              onChange={ (e) => setSearchLocal(e.target.value) }
            />
            <button type="submit">pesquisar</button>
          </form>

          <div id="addProducts">
            <Link to="/add-product">Adicionar Produto</Link>
            <Link
              to="/login"
              onClick={ () => localStorage.removeItem('token') }
            >
              Sair
            </Link>

          </div>
        </ul>
      </Nav>

    </HeaderContainer>
  );
}
