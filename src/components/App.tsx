import React, {useState} from 'react';
import {Route, HashRouter as Router, Routes } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import './CSS/App.scss'
import Logo from './assets/Logo.svg'
import Home from './pages/Home';
import Addresses from './pages/Addresses';
import Navbar from './Navbar/Navbar';



const App = () => {
    const [isBurgerActive, setBurgerActive] = useState<boolean>(false)

    return (
        <>
            <Router>
                <header className='header'>
                    <div className='header__logo'>
                        <img src={Logo} alt='logo'/>
                        <span>Wrench CRM</span>
                    </div>
                    <div className='header__login'>
                        <FaIcons.FaRegUserCircle/>
                        <span>Имя Фамилия</span>
                    </div>
                </header>
                <main className='content' onClick={() => setBurgerActive(false)}>
                    <Navbar isBurgerActive={isBurgerActive} setBurgerActive={setBurgerActive}/>
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