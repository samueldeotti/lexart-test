import { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css'

export default function Header() {

  const [search, setSearch] = useState('')

  return (
    <nav>
      <p>AmperCell</p>
      <ul>
      <label htmlFor="search">
        <input type="text" name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
      </label>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sign-up">Sign Up/Sign In</Link></li>
        <li><Link to="/login">cart</Link></li>
      </ul>
    </nav>
  )
}
