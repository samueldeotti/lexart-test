/* eslint-disable no-alert */
import { useState } from 'react';
import '../Login/Login.css';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const navigate = useNavigate();

  const verifySignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('https://lexart-test-server-psi.vercel.app/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert('Conta criada com sucesso');
      navigate('/login');
      return;
    }
    if (response.statusText === 'Unauthorized') {
      alert('Usuario ja existente');
      return;
    }
    alert('Erro ao criar conta');
  };

  return (
    <form onSubmit={ verifySignUp }>
      <label htmlFor="username">
        username
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={ username.trim() }
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
          value={ password.trim() }
          minLength={ 8 }
          onChange={ (e) => { setPassword(e.target.value); } }
          required
        />
      </label>
      <label htmlFor="checkPassword">
        verify password
        <input
          type="password"
          id="checkPassword"
          name="checkPassword"
          placeholder="verify password"
          minLength={ 8 }
          value={ checkPassword.trim() }
          onChange={ (e) => { setCheckPassword(e.target.value); } }
          required
        />
      </label>

      {/* fazer uma validação para o span mudar de cor de vermelho para verde */}
      <span>As senha precisam ser iguais</span>
      <span>Precisa ter 8 caracteres</span>
      <span>Precisa ter pelo menos um caractere especial</span>
      <span>Precisa ter pelo menos um número</span>

      <button type="submit">Criar conta</button>

    </form>
  );
}
