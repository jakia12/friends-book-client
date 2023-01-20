import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter
  , createRoutesFromElements
  , Route,
} from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './pages/home/Home';
import Friends from './pages/friends/Friends';
import AllFriends from './pages/allFriends/AllFriends';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import Suggestions from './pages/suggestions/Suggestions';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/allFriends" element={<AllFriends />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<SignUp />} />
      </Route>

    ));
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
