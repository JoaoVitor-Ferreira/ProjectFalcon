import './Css/Loja.css';

function Fornecedor(props){
return(
    <div>
          <div className='boxLoja'>
                        <img src={props.src} alt="Forncedor" className='imgLoja'/>
            </div>
    </div>
);
}

export default Fornecedor;