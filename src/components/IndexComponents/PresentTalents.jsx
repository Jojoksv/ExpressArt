
import '../../styles/PresentTalents.css'
import img from '../../assets/admin.jpg'
import { useEffect } from 'react';



function PresentTalents(){

    useEffect(() => {
        const handleScroll = () => {
          const container = document.getElementById('container');
          const scrollTop = window.scrollY;
          const containerTop = container.getBoundingClientRect().top;
          const containerHeight = container.offsetHeight;
    
          const scrollPercentage = (scrollTop - containerTop) / containerHeight;
    
          const items = document.querySelectorAll('.item');
          items.forEach((item, index) => {
            const translateZ = (index - 1) * 50 * scrollPercentage;
            const translateY = (index - 1) * 20 * scrollPercentage; // Ajustez cette valeur pour un défilement plus fluide
            item.style.transform = `translateZ(${translateZ}px) translateY(${translateY}px)`;
          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      
    return(
        <div className="container" id="container">
            <div className="item"><img src={img} alt="Image 1" /></div>
            <div className="item"><img src={img} alt="Image 2" /></div>
            <div className="item"><img src={img} alt="Image 3" /></div>
        </div>
    )
}
export default PresentTalents