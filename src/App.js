import "bootstrap/dist/css/bootstrap.min.css";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.js";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";

function App() {
  console.clear();
  return (
    <div>
      <Header />
      <Body />
      <Cards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
