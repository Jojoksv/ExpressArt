
import '../../styles/PresentTalents.css'
import img from '../../assets/admin.jpg'
import { useEffect } from 'react';



function PresentTalents(){

    useEffect(() => {
        const handleScroll = () => {
          const container = document.getElementById('Talentscontainer');
          const scrollTop = window.scrollY;
          const containerTop = container.getBoundingClientRect().top;
          const containerHeight = container.offsetHeight;
    
          const scrollPercentage = (scrollTop - containerTop) / containerHeight;
    
          const items = document.querySelectorAll('.Talentsitem');
          items.forEach((item, index) => {
            const translateZ = (index - 1) * 70 * scrollPercentage;
            const translateY = (index - 1) * 80 * scrollPercentage;
            item.style.transform = `translateZ(${translateZ}px) translateY(${translateY}px)`;
          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      
    return(
        <div className="Talentscontainer" id="Talentscontainer">
            <div className="Talentsitem"><img src={img} alt="Image 1" /></div>
            <div className="Talentsitem"><img src={img} alt="Image 2" /></div>
            <div className="Talentsitem"><img src={img} alt="Image 3" /></div>
        </div>
    )
}
export default PresentTalents