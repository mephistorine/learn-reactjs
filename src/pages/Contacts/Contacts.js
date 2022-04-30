import Container from "../../components/Container"
import style from "./Contacts.module.scss"
import me from "../../assets/me.jpg"

export default function Contacts() {
  return (
    <Container>
      <div className={ style.root }>
        <img src={ me } alt="Sam Bulatov" />
        <div className="about">
          Привет Я Сэм
        </div>
      </div>
    </Container>
  )
}
