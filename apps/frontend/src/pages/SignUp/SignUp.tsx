import { useState } from 'react';
import '../Login/Login.css';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  // implementar verificação de SignUp
  const verifySignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('username:', username);
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
      <label htmlFor="checkPassword">
        verify password
        <input
          type="checkPassword"
          id="checkPassword"
          name="checkPassword"
          placeholder="verify password"
          value={ checkPassword }
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
