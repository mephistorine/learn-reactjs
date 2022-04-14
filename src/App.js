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
      <Heading level={1}>Hello</Heading>
      <Text element="div" disabled>Sam</Text>
      <Footer />
    </>
  );
}

export default App;
