import  './Advertisement.css'
import ad_img from '../../assets/img/advertisement.jpg'

export default function Advertisement(){
    return(
        <div id="ad_section">
            <img src={ad_img} alt="" />
        </div>
    )
}