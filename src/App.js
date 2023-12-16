import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
