import { Container, Form, LinkSpan } from '../../pages/Login/LoginStyle';

type LoginFormProps = {
  handleSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  wrongLogin: boolean;
  setverifyPassword?: (verifyPassword: string) => void;
  verifyPassword?: string;
  isLogin: boolean;
};

export default function LoginForm({
  handleSubmit,
  loading,
  username,
  setUsername,
  password,
  setPassword,
  wrongLogin,
  setverifyPassword = () => {},
  verifyPassword = '',
  isLogin = true }: LoginFormProps) {
  const verifyLength = () => password.length >= 8;
  const verifyEquality = () => password === verifyPassword;
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

  return (
    <Container id="content">
      <Form onSubmit={ handleSubmit }>
        <h1>{isLogin ? 'Login' : 'Increva-se'}</h1>
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
                usuario
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
                senha
              </label>
            </div>

            {!isLogin
            && (
              <>
                <div id="labelContainer">
                  <input
                    type="password"
                    id="verifyPassword"
                    name="verifyPassword"
                    placeholder="verifyPassword"
                    value={ verifyPassword }
                    onChange={ (e) => { setverifyPassword(e.target.value); } }
                    required
                  />
                  <label htmlFor="verifyPassword">
                    verifique a senha
                  </label>
                </div>

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

                <button
                  type="submit"
                  disabled={ !verifyCredentials() }
                >
                  Criar conta
                </button>
              </>
            )}

            {wrongLogin && <span id="invalidSpan">Usuário ou senha inválidos</span>}
            { isLogin
            && (
              <>
                <span>
                  Não possui uma conta?
                  {' '}
                  <LinkSpan to="/signup">Increva-se </LinkSpan>
                </span>

                <button type="submit">Login</button>

              </>
            )}
          </div>

        )}

      </Form>

    </Container>
  );
}
