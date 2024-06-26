import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './comps/Login';
import SignUp from './comps/SignUp';
import CreateRec from './comps/CreateRec';
import ViewRec from './comps/ViewRec';
import ViewUsers from './comps/ViewUsers';
import HomePage from './comps/HomePage';
import Index from './comps/Index';
// lol to get it to run rename the firebase.js to Firebase.js , for some reason alwyas lowercasees it when i save or push it 

function App() { 
  return (
    <Router>
      <Routes>
         {/* <Route path="/" element={<HomePage />} />  */     /*
         After loging in then rout to homepage.  */}
        <Route path="/" element={<Index />} /> Starting index
        <Route path="/login" element={<Login />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create-recipe" element={<CreateRec />} />
        <Route path="/view-recipes" element={<ViewRec />} />
        <Route path="/view-users" element={<ViewUsers />} />
      </Routes>
    </Router>
  );
}
 
export default App;
