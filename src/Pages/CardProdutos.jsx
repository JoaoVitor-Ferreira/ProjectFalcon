// Parte da página Home
//Produtos em destaque 
import React from 'react';
import './Css/CardProdutos.css';
import { Produto } from './Produto';

function CardProdutos() {

  const CadeiraBlaster = Produto(1);
  const CadeiraBrighter = Produto(2);
  const CadeiraCosmic = Produto(3);
  /* const CadeiraFury = Produto(4);
  const CadeiraMeteora = Produto(5);
  const CadeiraWake  = Produto(6); */


  return (
    <div className='PrincipalProdutos'>
      
      <div className='boxTitle'>
        <h2>Produtos em Destaque</h2>
      </div>
      <div className='pag-produtos'>
      {CadeiraBlaster}
      {CadeiraBrighter}
      {CadeiraCosmic}
      </div>
      
    </div>
  );
}

export default CardProdutos;