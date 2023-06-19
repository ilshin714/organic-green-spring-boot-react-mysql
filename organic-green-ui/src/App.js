import {Route, Routes} from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Register from "./components/Register";
import Login from "./components/Login";
import UserList from './components/UserList';

function App() {
  return (
    <>
      <div className="h-screen">      
        <Routes>
          <Route path="/" element={  <Main />}/>
          <Route path="/register" element={  <Register/>}/>  
          <Route path="/login" element={<Login/>}/>
          <Route path="/user" element={<UserList/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
