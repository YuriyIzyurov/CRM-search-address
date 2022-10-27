import React from 'react';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import * as FaIcons from "react-icons/fa"
import './CSS/App.scss'
// @ts-ignore
import Logo from './assets/Logo.svg'
import Navbar from "./Navbar/Navbar";
import Home from './pages/Home';
import Addresses from './pages/Addresses';

const App = () => {

    return (
        <>
            <Router>
                <header className="header">
                    <div className="header__logo">
                        <img src={Logo} alt="logo"/>
                        <span>Wrench CRM</span>
                    </div>
                    <div className="header__login">
                        <FaIcons.FaRegUserCircle/>
                        <span>Имя Фамилия</span>
                    </div>
                </header>
                <main className="content">
                    <Navbar/>
                    <Routes>
                        <Route path='/'  element={<Home/>} />
                        <Route path='/address' element={<Addresses/>} />
                    </Routes>
                </main>
            </Router>
        </>
    );
};

export default App;