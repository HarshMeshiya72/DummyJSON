import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Header from './Header';
import Post from './Post';
import Coment from './Coment';
import Albums from './Albums';
import Photo from './Photo';
import Todo from './Todo';
import User from './User';
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Post" element={<Post />} />
        <Route path="Coment" element={<Coment />} />
        <Route path="Photo" element={<Photo />} />
        <Route path="Todo" element={<Todo/>} />
        <Route path="Albums" element={<Albums/>} />
        <Route path="User" element={<User/>} />
      </Routes>
      
       </>
  );
}

export default App;
