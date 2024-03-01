import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import './Layout.css'


export default function Layout() {
  return (
    <div className='content'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
