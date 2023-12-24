import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Img2 from"../images/night.jpg"

function About () {
    return (
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        cNameImg={Img2}
        title="About"
        btnClass="hide"
        />
        </>
    )
}

export default About