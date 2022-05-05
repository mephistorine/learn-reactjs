import style from "./Button.module.scss"
import PropTypes from "prop-types"
import cn from "classnames"

Button.propTypes = {
  children: PropTypes.node,
  appearance: PropTypes.oneOf([ "light", "dark" ]),
  onClick: PropTypes.func,
  className: PropTypes.string
}

Button.defaultProps = {
  appearance: "light"
}

export default function Button({ children, appearance, onClick, className }) {
  return (
    <button className={cn(className, style.root, style[ appearance ])} onClick={onClick}>{ children }</button>
  )
}
