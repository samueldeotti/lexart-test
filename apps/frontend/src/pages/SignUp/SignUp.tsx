/* eslint-disable no-alert */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const navigate = useNavigate();

  const verifyLength = () => password.length >= 8;
  const verifyEquality = () => password === checkPassword;
  const verifySpecialCharacter = () => {
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/g;
    return specialCharacters.test(password);
  };
  const verifyNumber = () => {
    const numbers = /[0-9]/g;
    return numbers.test(password);
  };

  const verifyCredentials = () => {
    return verifyLength() && verifyEquality()
      && verifySpecialCharacter() && verifyNumber();
  };

  const verifySignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('https://lexart-test-server-psi.vercel.app/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    console.log(response);
    console.log(await response.json());
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

      <div>
        <span
          style={ {
            color: (password && verifyEquality()) ? 'green' : 'red' } }
        >
          As senhas precisam ser iguais
        </span>
        <span
          style={ {
            color: verifyLength() ? 'green' : 'red' } }
        >
          Precisam ter pelo menos 8 caracteres
        </span>
        <span
          style={ {
            color: verifySpecialCharacter() ? 'green' : 'red' } }
        >
          Precisam ter pelo menos um caractere especial
        </span>
        <span
          style={ {
            color: verifyNumber() ? 'green' : 'red' } }
        >
          Precisam ter pelo menos um número
        </span>

      </div>

      <button type="submit" disabled={ !verifyCredentials() }>Criar conta</button>

    </form>
  );
}
