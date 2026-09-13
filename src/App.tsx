import Navbar from "./components/Navbar";
import './App.css'
import Hero from "./components/Hero";
import Footer from "./components/Footer";
function App() {

  return(
    <>
     <Navbar />
     <main className="p-10">
        <Hero/>
        <Footer/>
     </main>
    </>
  )

  
}

export default App
