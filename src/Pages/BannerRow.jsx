import bannerRowLeft from '../Img/BannerRow/BannerRow1-1.png';
import bannerRowRight from '../Img/BannerRow/BannerRow1-2.png';
import '../Pages/Css/BannerRow.css';

function BannerRow(){
    return(
        <div className='ContainerRow'>
            <img src= {bannerRowLeft} alt="BannerLeft" className='ImgRow'/>
            <img src= {bannerRowRight} alt="BannerRight" className='ImgRow'/>
        </div>
    )
}
export default BannerRow;