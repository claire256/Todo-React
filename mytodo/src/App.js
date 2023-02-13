import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import NavigationBar from './Components/NavigationBar';
import Todos from './Pages/Todos';
import Account from './Pages/Account';
import Signup from './Pages/Sign-up';
import ErrorPage from './Pages/ErrorPage';
import AppContextProvider from './Context/Context'


const App = () => {
  return (
    <>
    <AppContextProvider>
      <Router>
      <NavigationBar /> 
       <Routes>
               <Route exact path="/" element={<Home />}/>
               <Route  path="/todos" element={<Todos />}/>
               <Route  path="/account" element={<Account />}/>
               <Route  path="/signup" element={<Signup />}/>
               <Route  path="/login" element={<Login />}/>
               <Route  path="*" element={<ErrorPage />}/>

       </Routes>
     </Router>
     </AppContextProvider>

    </>
  );
}

export default App;