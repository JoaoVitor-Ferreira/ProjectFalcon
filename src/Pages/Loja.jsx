import './Css/Loja.css';
import Footer from "./Footer";
/* Lojas */
import amazon from '../Img/Fornecedores/amazon.png';
import b2w from '../Img/Fornecedores/americanas.png';
import Carrefour from '../Img/Fornecedores/Carrefour.png';
import Extra from '../Img/Fornecedores/Extra.png';
import Kabum from '../Img/Fornecedores/kabum.png';
import MM from '../Img/Fornecedores/MadeiraMadeira.png';
import MV from '../Img/Fornecedores/ManiaVirtual.png';
import ML from '../Img/Fornecedores/ML.png';
import PF from '../Img/Fornecedores/pontoFrio.png';
import Prizi from '../Img/Fornecedores/Prizi.png';
import Submario from '../Img/Fornecedores/Submarino.png';
import Fornecedor from './Fornecedor.jsx';
/* Lojas */

const lojas = [
{src: amazon},
{src: b2w},
{src: Carrefour},
{src: Extra},
{src: Kabum},
{src: MM},
{src: MV},
{src: ML},
{src: PF},
{src: Prizi},
{src: Submario}
];

function Loja(){
    return(
        <div className='mainLoja'>
        <div className='ContainerLoja'>
        {lojas.map((lojas,index) =>(
                  <Fornecedor
                  key = {index}
                  src = {lojas.src}
                  >
                </Fornecedor>
                ))}
        </div>
        <Footer className="footerLoja" /> 
        </div>
    );
}
export default Loja;