import Destination from '../components/Destination'
import Hero from '../components/Hero'
import NavBar from'../components/Navbar'
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
        </>
    )
}

export default Home
