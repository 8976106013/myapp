import React,{useState} from "react";
import  ReactDOM  from "react-dom";
import Navbar from "./navbar";
import Login from "./login";
import Logout from "./logout";
import List from "./list";
import Layout from "./layout";
import UserContext from "./context/UserContext";
 import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import home from "./home";


const App = () => {

  const [checkLogin, setCheckLogin] = useState(false);
  return (


    <>
     <UserContext.Provider value={{ checkLogin, setCheckLogin }}>
    <Navbar/>
    <Layout>
    <Routes>
    <Route element={<Navbar/>} path="/" /> 
    <Route element={<List/>} path="/list" /> 
    <Route element={<Login/>} path="/login" /> 
    <Route element={<Logout/>} path="/logout" /> 
    </Routes>
    </Layout>
    </UserContext.Provider>
    </>

  )
}

export default App


