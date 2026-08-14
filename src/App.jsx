import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import experiences from "./assets/json/experiences.json";

function App() {
    const experiencesJSON = experiences;

    return (
        <div className="font-inter">
            <Navbar></Navbar>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Experiences experiences={experiencesJSON}></Experiences>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default App;
