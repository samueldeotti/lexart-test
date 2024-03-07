import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import { SearchTypeProps } from '../../types/SearchTypeProps';

export default function Layout(props: SearchTypeProps) {
  const { search, handleChange } = props;

  return (
    <div className="content">
      <Header search={ search } handleChange={ handleChange } />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
