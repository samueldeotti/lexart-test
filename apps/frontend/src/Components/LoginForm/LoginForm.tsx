import { Container, Form, LinkSpan } from './LoginFormStyle';
import Input from '../Input/Input';

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
            <Input
              type="text"
              name="username"
              value={ username }
              setValue={ setUsername }
              text="usuario"
            />
            <Input
              type="password"
              name="password"
              value={ password }
              setValue={ setPassword }
              text="senha"
            />

            {!isLogin
            && (
              <>
                <Input
                  type="password"
                  name="verifyPassword"
                  value={ verifyPassword }
                  setValue={ setverifyPassword }
                  text="verique a senha"
                />

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
                    Pelo menos 8 caracteres
                  </span>
                  <span
                    style={ {
                      color: verifySpecialCharacter() ? 'green' : 'red' } }
                  >
                    Pelo menos um caractere especial
                  </span>
                  <span
                    style={ {
                      color: verifyNumber() ? 'green' : 'red' } }
                  >
                    Pelo menos um número
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
