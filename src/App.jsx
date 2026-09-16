import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/layout/Navbar";
import Hiro from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Login from "@/sections/Login"; 
import ScrollToTop from "./components/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hiro />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
        <ScrollToTop/>
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
