import './App.css';
import Header from "./components/Header"
import Slider from "./components/Slider"
import Footer from "./components/Footer"
import Heading from "./components/Heading"
import Text from "./components/Text/Text"
import Container from "./components/Container"

function App() {
  return (
    <>
      <Header />
      <Slider />
      <div className="some-container">
        <Container>
          <Heading>Marvel Cards</Heading>
          <Heading level={2}>Collect your best five</Heading>
          <Text disabled>Sam</Text>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;
