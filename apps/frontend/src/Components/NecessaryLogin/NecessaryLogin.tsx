import { Link } from 'react-router-dom';
import { LayoutContainer } from './NecessaryLoginStyle';

export default function NecessaryLogin() {
  console.log('enotru');

  return (
    <LayoutContainer className="content">
      <main>
        <h1>Para continuar faça login</h1>
        <Link to="/login">Login</Link>
      </main>
    </LayoutContainer>
  );
}
