import Header from "./header/header";
import './app.css'
import MyLangs from "./main/myLangs/myLangs";
import AboutMe from "./main/aboutMe/aboutMe";
import Portfolio from "./main/portfolio/portfolio";
import Footer from "./footer/footer";

function App() {
  return (
    <>
      <Header />
      <div className="aboutMe" id="aboutMe">
        <AboutMe />
        <MyLangs />
      </div>
      <div className="portfolio" id="portfolio">
        <Portfolio  />
      </div>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
