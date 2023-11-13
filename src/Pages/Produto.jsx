// Produto será preenchido com suas devidas informações
import React from 'react';
import OneProd from './OneProd.jsx';
import { InfoProdutos} from './InfoProdutos.jsx';
function Produto(id) {
    const produto = InfoProdutos.find((produto) => produto.id === id);
    if (!produto) {
      return null; 
    }
  return (
    <OneProd
      id ={produto.id}
      key={produto.nome}
      src ={produto.src[0]}
      nome={produto.nome}
      link={produto.link}
      manual={produto.manual}
    />
  );
}
export { InfoProdutos, Produto};
