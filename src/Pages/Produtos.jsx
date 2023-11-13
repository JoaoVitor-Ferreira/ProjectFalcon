//Página de produtos
import './Css/Produtos.css'
import Footer from '../Pages/Footer.jsx';
import { Produto } from './Produto';


function Produtos(){

  const CadeiraBlaster = Produto(1);
  const CadeiraBrighter = Produto(2);
  const CadeiraCosmic = Produto(3);
  const CadeiraFury = Produto(4);
  const CadeiraMeteora = Produto(5);
  const CadeiraWake = Produto(6);

    return(
        <div className='MainProdutos'>
        <div className="Pag-Produtos">
      {CadeiraBlaster}
      {CadeiraBrighter}
      {CadeiraCosmic}
      {CadeiraFury}
      {CadeiraMeteora}
      {CadeiraWake}
      
    </div>
    <Footer></Footer>
    </div>
    );
  }
  
  export default Produtos;