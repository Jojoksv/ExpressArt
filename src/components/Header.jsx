import { Link } from 'react-router-dom'
import '../styles/Header.css'


function Header(){
    return(
        <nav>
            <div className='navContainer'>
                <div className='navTitle'>
                    <div className='doted'></div>
                    <h1>Express<span>Art</span></h1>
                </div>
                <Link to="#">
                <div className='navButton'>
                    <button>Start for Free</button>
                </div>
                </Link>
            </div>
        </nav>
    )
}
export default Header
