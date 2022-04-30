import PropTypes from "prop-types"
import Container from "../../components/Container"
import Button from "../../components/Button"
import { BIO } from "../../constants/biographies"
import Heading from "../../components/Heading"
import Text from "../../components/Text/Text"
import style from "./Biography.module.scss"
import { useParams } from "react-router-dom"

Biography.propTypes = {
  characterId: PropTypes.number,
  onGoBackClick: PropTypes.func
}

export default function Biography({ characterId, onGoBackClick }) {
  const { id } = useParams()
  const bioId = typeof id !== "undefined" ? parseInt(id, 10) : characterId
  
  const characterBio = BIO[ bioId ]
  
  return (
    <Container>
      <div className={ style.goBackContainer }>
        <Button appearance="dark" onClick={onGoBackClick}>Go Back</Button>
      </div>
      {
        characterBio.map((block) => {
          switch (block.type) {
            case "h1":
              return <Heading level={1}>{ block.text }</Heading>
            case "h2":
              return <Heading level={2}>{ block.text }</Heading>
            case "paragraph":
              return <Text className={style.paragraph}>{ block.text }</Text>
            case "img":
              return <figure className={style.image}><img src={block.src} /></figure>
            default:
              return null
          }
        })
      }
    </Container>
  )
}
