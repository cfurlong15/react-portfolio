import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    // const navStyle = {
    //     display: "flex",
    //     justifyContent: "space-around",
    //     borderBottom: ".2rem solid black",
    //     padding: ".5rem",
    //     width: "90%",
    //     margin: "auto",
    // }
    
    return (
        <header>
            <h1 className="navName">Conor Furlong</h1>
            <nav className="Nav">
                <Link to='/'>
                    <div className="Nav-Link">HOME</div>
                </Link>
                <Link to='/about'>
                    <div className="Nav-Link">ABOUT</div>
                </Link>
                <Link to='/projects'>
                    <div className="Nav-Link">PROJECTS</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header;