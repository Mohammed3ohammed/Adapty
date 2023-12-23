import Hero from '../components/Hero'
import NavBar from'../components/Navbar'

function Home () {
    return (
        <>
        <NavBar />
        <Hero 
        cName="hero"
        cNameImg="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        </>
    )
}

export default Home
