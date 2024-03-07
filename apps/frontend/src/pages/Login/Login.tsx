import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../Components/LoginForm/LoginForm';

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
    <LoginForm
      handleSubmit={ verifyLogin }
      loading={ loading }
      username={ username }
      setUsername={ setUsername }
      password={ password }
      setPassword={ setPassword }
      wrongLogin={ wrongLogin }
      isLogin
    />
  );
}
