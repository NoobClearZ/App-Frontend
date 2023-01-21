import { useNavigate } from "react-router-dom"
import logo from '../assets/img/logo.png'
import '../assets/css/landing-nav.css'

export default function LandingNav() {

    const navigate = useNavigate()

    return (
        <>
            <div className='top'>
                <nav role='banner' className='navbar'>
                    <div className='container'>
                        <div className='nav-left'>
                            <span className='brand'>
                                <img src={logo} alt='' className='brand-logo' onClick={ () => navigate('/') }/>
                            </span>
                            <div className='nav-menu-left'>
                                <div className='dropdown'>
                                    <button className='nav-btn'>
                                        <a href='/'>Iphone</a>
                                    </button>
                                    <div className='drop-menu'>
                                        <ul>
                                            <li>
                                                <a href='/'>Iphone 14 Pro</a>
                                            </li>
                                            <li>
                                                <a href='/'>Iphone 14</a>
                                            </li>
                                            <li>
                                                <a href='/'>Iphone 13 Pro</a>
                                            </li>
                                            <li>
                                                <a href='/'>Iphone 13</a>
                                            </li>
                                            <li>
                                                <a href='/'>Iphone 12 Pro</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='dropdown'>
                                    <button className='nav-btn'>
                                        <a href='/'>Ipad</a>
                                    </button>
                                </div>
                                <div className='dropdown'>
                                    <button className='nav-btn'>
                                        <a href='/'>Watch</a>
                                    </button>
                                </div>
                                <div className='dropdown'>
                                    <button className='nav-btn'>
                                        <a href='/'>Mac</a>
                                    </button>
                                </div>
                                <div className='dropdown'>
                                    <button className='nav-btn'>
                                        <a href='/'>Aksesoris</a>
                                    </button>
                                </div>
                                <div className='dropdown'>
                                    <button className='nav-btn'>
                                        <a href='/'>TV</a>
                                    </button>
                                </div>
                            </div> 
                        </div>
                        <div className="nav-right">
                            <div className="nav-menu-right">
                                <div className="dropdown">
                                    <button className="nav-btn">
                                        <a href="/">Login</a>
                                    </button>
                                </div>
                                <div className="dropdown">
                                    <button className="nav-btn">
                                        <a href="/">Register</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}