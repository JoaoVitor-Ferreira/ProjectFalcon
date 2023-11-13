import Carrosel from './Carrosel';
import './Css/Header.css';
import './Css/Carrosel.css';

import CardProdutos from './CardProdutos';
import BannerRow from './BannerRow';
import Footer from './Footer.jsx';

function Home(){
    return(
    <div className='HomePage'>
     <Carrosel></Carrosel>
     <CardProdutos></CardProdutos>
     <div className='BannerHorizontal'> 
     <BannerRow></BannerRow>  
     </div>
     <Footer></Footer>
    </div>
    );
}
export default Home;
