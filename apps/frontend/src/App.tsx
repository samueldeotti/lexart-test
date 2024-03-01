import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
// import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      {/* <Route path="/sign-up" element={ <SignUp /> } /> */}
    </Routes>
  );
}

export default App;
