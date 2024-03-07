import { useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [wrongLogin, setWrongLogin] = useState(false);

  // MikeWazowski
  // Mike123#

  // falta fazer a verificação se o token é valido
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) navigate('/products');
  }, [navigate]);

  // implementar verificação de login
  const verifyLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5432/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/products');
      setWrongLogin(false);
      return;
    }

    setWrongLogin(true);
    setPassword('');
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
          minLength={ 8 }
          placeholder="password"
          value={ password }
          onChange={ (e) => { setPassword(e.target.value); } }
          required
        />
      </label>

      <button type="submit">Login</button>

      {wrongLogin && <span>Usuário ou senha incorretos</span>}
      <span>
        Não possui uma conta?
        <Link to="/signup">Increva-se</Link>
      </span>

    </form>
  );
}
