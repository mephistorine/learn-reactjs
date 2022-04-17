import classes from "./Slider.module.css"
import Container from "../Container"
import Heading from "../Heading"

export default function Slider() {
  return (
    <section className={ classes.section }>
      <div className={ classes.slider }>
        <Container className={ classes.sliderContent }>
          <Heading level={1} className={ classes.header }>Wow</Heading>
          <Heading level={1}>
            Wow
          </Heading>
          <Heading level={2}>
            Wow.Wow.Wow
          </Heading>
          <div className={ classes.call }>
            <button className={ classes.button }>Wow</button>
          </div>
        </Container>
      </div>
    </section>
  )
}
