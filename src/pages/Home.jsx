import '../App.css'
import './Home.css'

function Home() {
    return (
        // <section className="Home-Container bg-gradient-to-r from-sky-700 to-indigo-600 bg-gradient-to-l hover:bg-gradient-to-r">
        <section>   
            <div className="Headshot"><img src="./images/conor-furlong-updated-headshot.jpg" /></div> 
            <div className="Intro">
                <h1 className="Welcome">Welcome!</h1>
                <h1 className="homeName">I'm Conor Furlong.</h1>
                <h1 className="myTitle">Software Engineer</h1>
            </div>
        </section>
    )
}

export default Home;