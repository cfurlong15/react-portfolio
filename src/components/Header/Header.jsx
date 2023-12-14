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
            <h1>Conor Furlong</h1>
            <nav className="Nav text-violet-600">
                <Link to='/'>
                    <div>HOME</div>
                </Link>
                <Link to='/about'>
                    <div>ABOUT</div>
                </Link>
                <Link to='/projects'>
                    <div>PROJECTS</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header;