import {Route, Routes} from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Register from "./components/Register";
import Login from "./components/Login";
import UserList from './components/UserList';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <>
      <div className="h-screen">      
        <Routes>
          <Route path="/" element={  <Main />}/>
          <Route path="/register" element={  <Register/>}/>  
          <Route path="/login" element={<Login/>}/>
          <Route path="/user" element={<UserList/>}/>
          <Route path="/user/edit/:id" element={<UpdateUser/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
