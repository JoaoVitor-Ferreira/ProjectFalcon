import React, { useEffect } from 'react';
import useDarkMode from 'use-dark-mode';
import './Css/Header.css';
/* import Desligada from '../Img/icons/lampada_DES.png';
import Ligada from '../Img/icons/lampada_LIG.png'; */

function UseDarkMode({ onDarkModeChange }) {
  const darkMode = useDarkMode(false, {
    classNameDark: 'modo-escuro',
    classNameLight: 'modo-claro'
  });

  useEffect(() => {
    onDarkModeChange && onDarkModeChange(darkMode.value);
  }, [darkMode.value, onDarkModeChange]);

  return (
    <button onClick={darkMode.toggle} className='BtnBox'>
      {darkMode.value ? <img src='https://i.ibb.co/Cbzb8k8/lua-background-Blue.png' alt='DESLIGADO' className='LuaDarkMode icon-DarkMode'/> : <img src= 'https://i.ibb.co/0nfC5Bv/sol.png' alt='LIGADO' className='SolDarkMode icon-DarkMode'/>}
    </button>
  );
}

export default UseDarkMode;
