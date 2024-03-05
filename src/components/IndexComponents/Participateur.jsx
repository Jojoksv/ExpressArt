import '../../styles/Participateur.css'
import brand1 from '../../assets/pers1.jpg'
import brand2 from '../../assets/pers2.jpg'
import brand3 from '../../assets/pers3.jpg'
import brand4 from '../../assets/pers4.jpg'
import brand5 from '../../assets/pers5.jpg'
import brand6 from '../../assets/pers6.jpg'
import brand7 from '../../assets/pers7.jpg'
import brand8 from '../../assets/pers8.jpg'


function Participateur(){
    return(
        <div className='participer'>
            <div className='box left'>
                <span style={{ '--i': 1 }}><img src={brand1} alt="" /></span>
                <span style={{ '--i': 2 }}><img src={brand2} alt="" /></span>
                <span style={{ '--i': 3 }}><img src={brand3} alt="" /></span>
                <span style={{ '--i': 4 }}><img src={brand4} alt="" /></span>
                <span style={{ '--i': 5 }}><img src={brand5} alt="" /></span>
                <span style={{ '--i': 6 }}><img src={brand6} alt="" /></span>
                <span style={{ '--i': 7 }}><img src={brand7} alt="" /></span>
                <span style={{ '--i': 8 }}><img src={brand8} alt="" /></span>
            </div>
            <div className='box'>
                <span style={{ '--i': 1 }}><img src={brand1} alt="" /></span>
                <span style={{ '--i': 2 }}><img src={brand2} alt="" /></span>
                <span style={{ '--i': 3 }}><img src={brand3} alt="" /></span>
                <span style={{ '--i': 4 }}><img src={brand4} alt="" /></span>
                <span style={{ '--i': 5 }}><img src={brand5} alt="" /></span>
                <span style={{ '--i': 6 }}><img src={brand6} alt="" /></span>
                <span style={{ '--i': 7 }}><img src={brand7} alt="" /></span>
                <span style={{ '--i': 8 }}><img src={brand8} alt="" /></span>
            </div>
            <div className='box right'>
                <span style={{ '--i': 1 }}><img src={brand1} alt="" /></span>
                <span style={{ '--i': 2 }}><img src={brand2} alt="" /></span>
                <span style={{ '--i': 3 }}><img src={brand3} alt="" /></span>
                <span style={{ '--i': 4 }}><img src={brand4} alt="" /></span>
                <span style={{ '--i': 5 }}><img src={brand5} alt="" /></span>
                <span style={{ '--i': 6 }}><img src={brand6} alt="" /></span>
                <span style={{ '--i': 7 }}><img src={brand7} alt="" /></span>
                <span style={{ '--i': 8 }}><img src={brand8} alt="" /></span>
            </div>
            
            <div className="textOnBox">
                <div className='telents'>
                    <span className='doted'></span>
                    <span>+5000 talents</span>
                </div>
                <div className='discoverWords'>
                    <h1>Découvrez les talents</h1>
                    <h1>Contactez les artistes</h1>
                </div>
                <a href=""><span>Entrez en contact</span></a>
            </div>
        </div>
    )
}
export default Participateur