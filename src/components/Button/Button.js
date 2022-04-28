import style from "./Button.module.scss"
import PropTypes from "prop-types"
import cn from "classnames"

Button.propTypes = {
  children: PropTypes.node,
  appearance: PropTypes.oneOf([ "light", "dark" ])
}

Button.defaultProps = {
  appearance: "light"
}

export default function Button({ children, appearance }) {
  return (
    <button className={cn(style.root, style[ appearance ])}>{ children }</button>
  )
}
