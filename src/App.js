import './App.css';
import Header from "./components/Header"
import Slider from "./components/Slider"
import Footer from "./components/Footer"
import Heading from "./components/Heading"
import Text from "./components/Text/Text"

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Text disabled>Sam</Text>
      <Footer />
    </>
  );
}

export default App;
