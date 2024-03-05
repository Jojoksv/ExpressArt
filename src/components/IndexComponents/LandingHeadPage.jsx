
import '../../styles/LandingHeadPage.css'
import brandVideo from '../../assets/videoBrand.mp4'

function LandingHeadPage(){
    return(
        <header>
            <video autoPlay muted loop id='video-bg'>
                <source src={brandVideo} type='video/mp4'/>
            </video>
            <div className='brandWords'>
                <h1>
                    <span className='left'>dare </span><span className='right colored'> to shine</span><br />
                    <span className='left colored'>reinvent </span><span className='right'>art...</span>
                </h1>
                <div className='ExploreShare'>
                    <span>Explore the exceptional</span>
                    <span className='line'></span>
                    <span>Share the extraodinary</span>
                </div>
            </div>
        </header>
    )
}
export default LandingHeadPage