import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Css/Header.css';
import Logo from '../Img/Header/Logo_Name.png';
import setaDir from '../Img/Header/setaRight.png';
import MenuLateral from './MenuLateral';
import UseDarkMode from './UseDarkMode';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div>
      <header className={`header ${isDarkMode ? 'modo-escuro' : 'modo-claro'}`}>
        <Link to="/">
          <div className="Box-Logo">
            <img src={`${isDarkMode ? 'https://i.ibb.co/D4ByDhd/Logo-Name-90acb67d65082a405973.png' : Logo}`} alt="Logo" className="logo" />
          </div>
        </Link>
        <nav className={`menu-all ${isDarkMode ? 'modo-escuro' : 'modo-claro'}`}>
          <div className="menu-icon" onClick={toggleMenu}>
            <img src={setaDir} alt="seta" width="50px" id="seta" />
          </div>
          <ul className={`menu ${isMenuOpen ? 'show' : ''}`}>
            <li>
              <Link
                to="/"
                className={`Menu-Link ${isDarkMode ? 'modo-escuro' : 'modo-claro'}`}
                style={{ color: isDarkMode ? 'white' : 'black' }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Produtos"
                className={`Menu-Link ${isDarkMode ? 'modo-escuro' : 'modo-claro'}`}
                style={{ color: isDarkMode ? 'white' : 'black' }}
              >
                Produtos
              </Link>
            </li>
            <li className='Menu-Link'>
              <Link
                to="/Loja"
                className={`Menu-Link ${isDarkMode ? 'modo-escuro' : 'modo-claro'}`}
                style={{ color: isDarkMode ? 'white' : 'black' }}
              >
                Loja
              </Link>
            </li>
            <li>
              <Link
                to="/Suporte"
                className={`Menu-Link ${isDarkMode ? 'modo-escuro' : 'modo-claro'}`}
                style={{ color: isDarkMode ? 'white' : 'black' }}
              >
                Suporte
              </Link>
            </li>
            <li>
              <Link
                to="/SobreNos"
                className={`Menu-Link ${isDarkMode ? 'modo-escuro' : 'modo-claro'}`}
                style={{ color: isDarkMode ? 'white' : 'black' }}
              >
              Marca
              </Link>
            </li>
          </ul>
          <div className={`icons-Header `}>
            <div className="BoxDarkMode">
              <UseDarkMode onDarkModeChange={setIsDarkMode} />
            </div>
          </div>
        </nav>
      </header>
      <MenuLateral isOpen={isMenuOpen} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} className = {`menu-lateral ${isDarkMode ? 'modo-escuro' : 'modo-claro'}`}/>
      <Outlet />
    </div>
  );
};

export default Header;
