import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Img3 from "../images/Contact.jpg"


function Contact () {
    return (
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        cNameImg={Img3}
        title="Contact"
        btnClass="hide"
        />
        <ContactForm />
        <Footer />
        </>
    )
}

export default Contact