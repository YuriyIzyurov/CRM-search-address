import React, {Dispatch, useState } from 'react';
import './../CSS/NavBar.scss'
import * as FaIcons from 'react-icons/fa';
import { NavLink} from 'react-router-dom';
import {NavbarData} from './NavbarData';

type PropsType = {
    isBurgerActive: boolean
    setBurgerActive: Dispatch<boolean>
}
const Navbar:React.FC<PropsType> = ({isBurgerActive, setBurgerActive}) => {
    const [isOpened, setSubIsOpened] = useState<boolean>(false)

    return (
        <nav
            className={isBurgerActive ? 'navbar navbar-active' : 'navbar'}
            onClick={e => e.stopPropagation()}
        >
            <div className='navbar-header'>
                <span className='navbar-menu'>Меню</span>
                <div
                    className={isBurgerActive ? 'navbar-burger-btn burger-opened' : 'navbar-burger-btn'}
                    onClick={() => setBurgerActive(!isBurgerActive)}>
                    <span/>
                </div>
            </div>
            <ul className='navbar-list'>
                <li>
                    {NavbarData.map((item, index) => {
                        return (
                            <li
                                className={isOpened && item.submenu ? item.classname + ' nav-item-inactive' : item.classname}
                                key={index}
                                style={{marginLeft: isBurgerActive ?'0px' : ''}}
                                onClick={() => {!item.submenu && setBurgerActive(false)}}
                            >
                                {item.submenu ?
                                    <>
                                        <div
                                            className='nav-item-menu'
                                            onClick={() => {item.submenu && setSubIsOpened(!isOpened)}}
                                        >
                                            {item.icon}
                                            <span className={isBurgerActive ? 'navbar-title title-show' : 'navbar-title'}>
                                                {item.title}
                                            </span>
                                            <FaIcons.FaCaretUp className={isOpened ? 'caret caret-down' : 'caret'}/>
                                        </div>
                                        <ul>
                                            {item.submenu.map((item,index) =>
                                                <li
                                                    className={isOpened ? item.classname + ' sub-show' : item.classname}
                                                    key={'sub' + index}
                                                    onClick={() => setBurgerActive(false)}>
                                                <NavLink className={({isActive}) => isActive ? 'active': ''} to={item.path} end>
                                                    {item.icon}
                                                    <span className={isBurgerActive ? 'navbar-title title-show' : 'navbar-title'}>
                                                        {item.title}
                                                    </span>
                                                    <span className='active-border'></span>
                                                </NavLink>
                                            </li>)}
                                        </ul>
                                    </>
                                    :
                                    <NavLink to={item.path} className={({isActive}) => isActive ? 'active': ''} end>
                                        {item.icon}
                                        <span className={isBurgerActive ? 'navbar-title title-show' : 'navbar-title'}>
                                            {item.title}
                                        </span>
                                        <span className='active-border'></span>
                                    </NavLink>}
                            </li>
                        )
                    })}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;