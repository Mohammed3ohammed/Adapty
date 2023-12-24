import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
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
        </>
    )
}

export default Service