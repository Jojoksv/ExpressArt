import '../../styles/PresentWork.css'
import brand2 from '../../assets/Brand2.webp'



function PresentWork(){
    return(
        <section className='sectionWorksShow'>
            <div className='firstDevWorks'>
                <span>innovate</span>
                <img src={brand2} alt="" />
            </div>
            <div className='inspire'>
                <span>inspire the world</span>
            </div>
            <div className='SecondDevWorks'>
                <img src={brand2} alt="" />
                <span>dazzle</span>
            </div>
        </section>
    )
}
export default PresentWork





