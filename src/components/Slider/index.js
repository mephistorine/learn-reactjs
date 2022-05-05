import classes from "./Slider.module.scss"
import Container from "../Container"
import Heading from "../Heading"
import Button from "../Button"

export default function Slider() {
  return (
    <section className={ classes.section }>
      <div className={ classes.slider }>
        <Container className={ classes.sliderContent }>
          <Heading level={1} backLine className={ classes.header }>Wow</Heading>
          <Heading level={2}>
            Wow.Wow.Wow
          </Heading>
          <div className={ classes.call }>
            <Button appearance={"dark"}>Wow</Button>
          </div>
        </Container>
      </div>
    </section>
  )
}
