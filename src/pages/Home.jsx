import "../App.css";
import "./Home.css";

function Home() {
  return (
    <section className="Home">
      <div>
        <img
          className="Headshot"
          src="./images/conor-furlong-updated-headshot.jpg"
        />
      </div>
      <div className="Intro">
        <h1 className="Welcome">Welcome!</h1>
        <h1 className="homeName">I'm Conor Furlong.</h1>
        <h1 className="myTitle">Software Engineer</h1>
      </div>
    </section>
  );
}

export default Home;
