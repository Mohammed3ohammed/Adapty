import Destination from '../components/Destination'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavBar from'../components/Navbar'
import Trip from '../components/Trip'
import Img1 from "../images/HomeImg.jpg"

function Home () {
    return (
        <>
        <NavBar />
        <Hero 
        cName="hero"
        cNameImg={Img1}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination />
        <Trip />
        <Footer />
        </>
    )
}

export default Home
