import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Trip from "../components/Trip"
import Img4 from "../images/4.jpg"

function Service () {
    return (
        <>
          <Navbar />
        <Hero
        cName="hero-mid"
        cNameImg={Img4}
        title="Service"
        btnClass="hide"
        />
        <Trip />
        <Footer />
        </>
    )
}

export default Service