import { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // implementar verificação de login
  const verifyLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/products');
  };

  return (
    <form onSubmit={ verifyLogin }>
      <label htmlFor="username">
        username
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={ username }
          onChange={ (e) => { setUsername(e.target.value); } }
          required
        />
      </label>
      <label htmlFor="password">
        password
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={ password }
          onChange={ (e) => { setPassword(e.target.value); } }
          required
        />
      </label>

      <button type="submit">Login</button>

      <span>
        Não possui uma conta?
        <Link to="/sign-up">Increva-se</Link>
      </span>

    </form>
  );
}
