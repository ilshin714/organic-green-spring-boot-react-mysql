import {Route, Routes} from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Register from "./components/Register";

function App() {
  return (
    <>
      <div className="h-screen">      
        <Routes>
          <Route path="/" element={  <Main />}/>
          <Route path="/register" element={  <Register/>}/>  
        </Routes>
      </div>
    </>
  );
}

export default App;
