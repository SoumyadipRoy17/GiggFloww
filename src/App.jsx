import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <About />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
