import { useState } from "react"
import './Login.css'
import { Link } from "react-router-dom"


export default function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // implementar verificação de login
  const verifyLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('username:', username)
  }

  return (
    <form onSubmit={verifyLogin}>
      <label htmlFor="username">
        <input type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => { setUsername(e.target.value)}}
          required
        />
      </label>
      <label htmlFor="">
        <input type="password"
          id="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value)}}
          required
        />
      </label>

      <button type="submit">Login</button>

      <span>Não possui uma conta? <Link to={"/sign-up"}>Increva-se</Link></span>


    </form>
  )
}
