import style from "./CharacterCards.module.scss"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CHARACTER } from "../../constants/characters"
import CharacterCard from "../CharacterCard"

CharacterCards.propTypes = {

}

CharacterCards.defaultProps = {}

export default function CharacterCards() {
  const [ characters, setCharacters ] = useState(CHARACTER)
  
  const handleLikeClick = (id) => {
    setCharacters((prevCharacters) => {
      return prevCharacters.map((character) => {
        if (character.id !== id) {
          return character
        }
        
        return {
          ...character,
          isLike: !character.isLike
        }
      })
    })
  }
  
  return (
    <div>
      <section className={ style.cardSection }>
        <div>
          <h2 className={ style.cardTitle }>Select your Hero</h2>
        </div>
        <div className={style.cardWrap}>
          {
            characters.map((character) => {
              return (
                <div key={character.id}>
                  <CharacterCard
                    id={character.id}
                    name={character.name}
                    src={character.thumbnail.path}
                    humanName={character.humanName}
                    description={character.description}
                    isLiked={character.isLike}
                    onLikeClick={handleLikeClick}
                  />
                </div>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}
