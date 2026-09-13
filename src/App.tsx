import Navbar from "./components/Navbar";
import './App.css'
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";

function App() {

  return(
    <>
     <Navbar />
     <main className="p-10">
        <Hero/>
     </main>
    </>
  )

  
}

export default App
