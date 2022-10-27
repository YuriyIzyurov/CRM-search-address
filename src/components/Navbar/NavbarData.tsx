import React from 'react'
import * as ImIcons from "react-icons/im"
import * as FaIcons from "react-icons/fa"
import * as FiIcons from "react-icons/fi"
import * as BiIcons from "react-icons/bi"

export const NavbarData = [
    {
        title: 'Главная',
        path: '/',
        icon: <ImIcons.ImHome />,
        classname: 'nav-item',
    },
    {
        title: 'Поиск адресов',
        path: '/address',
        icon: <ImIcons.ImSearch />,
        classname: 'nav-item',
    },
    {
        title: 'Таблицы',
        path: '/tables',
        icon: <ImIcons.ImTable />,
        classname: 'nav-item',
    },
    {
        title: 'Календарь',
        path: '/calendar',
        icon: <ImIcons.ImCalendar />,
        classname: 'nav-item',
    },
    {
        title: 'Карты',
        path: '/maps',
        icon: <FaIcons.FaMapMarkerAlt />,
        classname: 'nav-item',
    },
    {
        title: 'Виджеты',
        path: '/widgets',
        icon: <ImIcons.ImTv />,
        classname: 'nav-item',
    },
    {
        title: 'Настройки',
        icon: <FiIcons.FiSettings />,
        classname: 'nav-item',
        submenu: [{
            title: 'Настройки профиля',
            path: '/profile',
            icon: <FiIcons.FiUser/>,
            classname: 'sub-nav',
        },{
            title: 'Управление финансами',
            path: '/finance',
            icon: <BiIcons.BiCalculator/>,
            classname: 'sub-nav',
        }]
    },
    {
        title: 'Выход',
        path: '/exit',
        icon: <BiIcons.BiExit />,
        classname: 'nav-item',
    },
]
