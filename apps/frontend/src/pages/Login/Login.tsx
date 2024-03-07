import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, LinkSpan } from './LoginStyle';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [wrongLogin, setWrongLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) navigate('/products');
  }, [navigate]);

  const verifyLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch('https://lexart-test-server-psi.vercel.app/login', {
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
      setLoading(false);
      return;
    }
    setLoading(false);
    setWrongLogin(true);
    setPassword('');
  };

  return (
    <Container id="content">
      <Form onSubmit={ verifyLogin }>
        <h1>Login</h1>
        {loading ? <span id="loading">Carregando...</span> : (
          <div>
            <div id="labelContainer">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={ username }
                onChange={ (e) => { setUsername(e.target.value); } }
                required
              />
              <label htmlFor="username">
                username
              </label>

            </div>
            <div id="labelContainer">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                value={ password }
                onChange={ (e) => { setPassword(e.target.value); } }
                required
              />
              <label htmlFor="password">
                password
              </label>
            </div>

            {wrongLogin && <span id="invalidSpan">Usuário ou senha inválidos</span>}
            <span>
              Não possui uma conta?
              {' '}
              <LinkSpan to="/signup">Increva-se </LinkSpan>
            </span>

            <button type="submit">Login</button>
          </div>

        )}

      </Form>

    </Container>
  );
}
