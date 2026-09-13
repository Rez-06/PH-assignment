import Navbar from "./components/Navbar";
import './App.css'
import TechSection from "./components/TechSection";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {

  return(
    <>
     <Navbar />
     <main className="p-10">
        <Hero/>
        <TechSection />
        <Footer/>
        <ToastContainer position="top-right" autoClose={3000} />
     </main>
    </>
  )

  
}

export default App
