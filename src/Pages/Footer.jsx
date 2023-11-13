import { Link } from 'react-router-dom';
import logo from '../Img/Header/Logo_Name.png';
import insta from '../Img/RedesSociais/instagram.png';
import face from '../Img/RedesSociais/Face.png';
import wpp from '../Img/RedesSociais/wpp.png'; 
import '../Pages/Css/Footer.css'
 function Footer(){
    return(
        <div className='Main-Footer'>
          <div className='Box-Logo'>
          <img src={logo} alt="Logo" className='logo' />
          <div className='Box-Sociais'>
          <a href='https://www.instagram.com/falcongamerofc/'><img src={insta} alt="social-insta" className='social' /></a>
          <a href="https://www.facebook.com/falcongamerofc"><img src= {face} alt='Social-Face' className='social'/></a>
          <a href='https://wa.me/552123914737'><img src={wpp} alt="social-whatsapp" className='social' /></a>
          </div>
          </div>
          <div className='links-footer'>
            <h2>Links Uteis</h2>
            <ul className = "listaLinks">
              <li className='LinkFoooter'><Link to = "/Produtos" className='LinkFoooter'>Produtos</Link></li>
              <li className='LinkFoooter'><Link to = "/Suporte" className='LinkFoooter'>Suporte</Link></li>
              <li className='LinkFoooter'><Link to = "/Loja" className='LinkFoooter'>Lojas Parceiras</Link></li>
              <li className='LinkFoooter'><Link to= "/Blog" className='LinkFoooter'>Blog</Link></li>
            </ul>
          </div>
        </div>
    );
 }

 export default Footer;