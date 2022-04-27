import classes from "./CharacterCard.module.scss"
import { ReactComponent as Like } from "./assets/heart.svg"
import PropTypes from "prop-types"
import cn from "classnames"

CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  src: PropTypes.string,
  humanName: PropTypes.string,
  description: PropTypes.string,
  onLikeClick: PropTypes.func,
  isLiked: PropTypes.bool
}

CharacterCard.defaultProps = {
  isLiked: false
}

export default function CharacterCard({ id, name, src, humanName, description, isLiked, onLikeClick }) {
  return (
    <div className={ classes.root }>
      <img src={src} alt={name} className={ classes.cardImage } />
      <div className={ classes.cardDetails }>
        <h2 className={ classes.cardName }>{ name }</h2>
        <h3 className={ classes.cardHumanName }>{ humanName }</h3>
        <p className={ classes.cardDescription }>{ description }</p>
        <div className={ classes.cardMeta }>
          <div className={ cn(classes.like, { [ classes.liked ]: isLiked }) }>
            <Like onClick={() => onLikeClick(id)} />
          </div>
          <div className="readBio">
            <a href="#">Read bio</a>
          </div>
        </div>
      </div>
    </div>
  )
}
