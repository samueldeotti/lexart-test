/* eslint-disable no-alert */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../Components/LoginForm/LoginForm';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const verifySignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setloading(true);
    const response = await fetch('https://lexart-test-server-psi.vercel.app/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });


    setloading(false);
    if (response.ok) {
      alert('Conta criada com sucesso');
      navigate('/login');
      return;
    }
    if (response.status === 401) {
      alert('Usuario ja existe');
      return;
    }
    alert('Erro ao criar conta');
  };

  return (
    <LoginForm
      handleSubmit={ verifySignUp }
      loading={ loading }
      username={ username }
      setUsername={ setUsername }
      password={ password }
      setPassword={ setPassword }
      wrongLogin={ false }
      verifyPassword={ checkPassword }
      setverifyPassword={ setCheckPassword }
      isLogin={ false }
    />
  );
}
