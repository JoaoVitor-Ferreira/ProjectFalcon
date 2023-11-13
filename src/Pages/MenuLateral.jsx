// MenuLateral.js
import React from 'react';
import {Link } from "react-router-dom";
import './Css/Home.css'
import UseDarkMode from './UseDarkMode';

const MenuLateral = ({ isOpen , isDarkMode, setIsDarkMode}) => {
  return (
    <div className={`menu-lateral ${isOpen ? 'show' : ''} ${isDarkMode? 'modo-escuro' : 'modo-claro'}`} id="menuLateral">
      <ul>
            <li><Link to="/" className="Menu-Link dark-mode light-mode">Home</Link></li>
            <li><Link to="/Produtos" className="Menu-Link dark-mode light-mode">Produtos</Link></li>
            <li><Link to="/Loja" className="Menu-Link dark-mode light-mode">Loja</Link></li>
            <li><Link to="/Suporte" className="Menu-Link dark-mode light-mode">Suporte</Link></li>
            <li><Link to="/SobreNos" className="Menu-Link dark-mode light-mode">Marca</Link></li>
      </ul>
      <div className='BoxIconDarkMode'>
        <UseDarkMode/>
      </div>
    </div>
  );
};

export default MenuLateral;
