import { Container, Form, LinkSpan } from './LoginFormStyle';
import Input from '../Input/Input';
import CheckPassword from './CheckPassword';

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
  const verifyEquality = () => (password && password === verifyPassword);
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
        <h1>{isLogin ? 'Login' : 'Inscreva-se'}</h1>
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
                  <CheckPassword
                    isValid={ (verifyEquality() as boolean) }
                    text="As senhas precisam ser iguais"
                  />
                  <CheckPassword
                    isValid={ verifyLength() }
                    text="Pelo menos 8 caracteres"
                  />
                  <CheckPassword
                    isValid={ verifySpecialCharacter() }
                    text="Pelo menos um caractere especial"
                  />
                  <CheckPassword
                    isValid={ verifyNumber() }
                    text="Pelo menos um número"
                  />
                </div>

                <button
                  type="submit"
                  disabled={ !verifyCredentials() }
                >
                  {loading ? 'Carregando...' : 'Criar conta'}
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
                <button
                  disabled={ loading }
                  type="submit"
                >
                  {loading ? 'Carregando...' : 'Login'}
                </button>
              </>
            )}
        </div>

      </Form>

    </Container>
  );
}
