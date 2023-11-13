//Produto é montado aqui
import './Css/CardProdutos.css';
import { Card, Button} from 'react-bootstrap'; 
import React from 'react';
import {Link} from 'react-router-dom';

function OneProd(props){
return(
  <div className='ContPrincipal'>
  <Card className='Card Card-pag card'>
    <Card.Img variant="top" src={props.src} className='ImgCard'/>
    <Card.Body>
      <Card.Title className='TitleCard TitleCard-pag'>{props.nome}</Card.Title> 
      <div className='card-text'  dangerouslySetInnerHTML={HTMLAreaElement = props.descricao} />
      <div className="box-button box-button-pag">
        <Button variant="primary">
          <Link to={`/produto/${props.id}`} className='Btn-ViewProd'>Ver Produto</Link>
        </Button>
        
        <a href={props.manual}>
          <Button variant="primary">Ver Manual</Button>
        </a>
      </div>
    </Card.Body>
  </Card>
</div>
);
}

export default OneProd;