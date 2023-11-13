import React from 'react';
import { InfoProdutos } from './InfoProdutos.jsx';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer.jsx';
import ProdDestaque from './CardProdutos.jsx'
import './Css/PagProd.css';
import { Button } from 'react-bootstrap';



function ProdutoPage() {
  const { id } = useParams();
  const produto = InfoProdutos.find((produto) => produto.id === Number(id));
  const pagError = 
  <div>
    <div>Algo deu errado!</div>
    <div>Mas não fique por fora, veja nossos produtos em destaque!</div>
    <ProdDestaque/>
    <Footer></Footer>
  </div>
  

if (!produto) {
  return pagError;
}
const ImagensCarrosel = produto.src.map((imagem, index) => (
  <Carousel.Item interval={2000} >
    <img key={index} src={imagem} alt={`${produto.nome} ${index}`} className='One-Img-Carrosel img-fluid w-100'/>
    </Carousel.Item>
  ));
  /*Variação por cor 
  const variante = produto.variante;

for (let x of variante) {  
NomeClasse = "caixaColorida " + x.cor[i]; 
i++
 htmlVariante = 
   <div className='BoxColor'>
         <li className = {NomeClasse}></li>
       </div>
} */
  return (
  <div className="Produto-Page">

    <div className='Container-Superior'>
      <div className={` background-box`}> 
      <div className='Container-Carrosel'>
        <Carousel fade = "false" className='Carousel-Box' >
          {ImagensCarrosel}
        </Carousel >
      </div>
        <div className= 'LeftContainer'>
        <div className='Nome-Produto'>
          <h1 className='Titulo-Produto' dangerouslySetInnerHTML={{__html: produto.TituloProduto}}></h1>
          <h3 className='SubTitulo-Produto' dangerouslySetInnerHTML={{__html: produto.SubTitulo}}></h3>
        </div>
          <div className='Box-Buttton'><Button className='btn-Produto-Page'>
            <a href={produto.manual} className='link-name'> VER MANUAL</a>
              </Button>
              <Button className='btn-Produto-Page'>
            <Link to="/Loja" className='link-name'> Lojas Parceiras</Link>
            </Button>
        </div>
        </div>
      </div>
      </div>
      <div className='box-prod-2'>  
      <div className='Descricao-Produto' dangerouslySetInnerHTML={{ __html: produto.descricao }}></div>
      </div>
      
      <Footer />
    </div>
  );
}

export default ProdutoPage;
