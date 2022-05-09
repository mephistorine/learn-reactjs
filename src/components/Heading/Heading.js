import React from "react"
import PropTypes from "prop-types"
import classes from "./Heading.module.scss"
import cn from "classnames"

Heading.propTypes = {
  level: PropTypes.oneOf([ 1, 2, 3, 4, 5 ]),
  children: PropTypes.node,
  className: PropTypes.string,
  black: PropTypes.bool,
  backLine: PropTypes.bool,
  anchorId: PropTypes.string,
  onClickAnchor: PropTypes.func
}

Heading.defaultProps = {
  level: 1,
  black: false,
  backLine: false,
  anchorId: null
}

function Heading({ level, black, backLine, children, className, anchorId, onClickAnchor }) {
  const isAnchorLinkExist = typeof anchorId === "string";
  let preparedAnchorId;
  
  if (isAnchorLinkExist) {
    preparedAnchorId = anchorId.trim().replaceAll(" ", "")
  }
  
  return (
    React.createElement(
      `h${ level }`,
      {
        className: cn(
          className,
          classes[ `headingLevel${ level }` ],
          classes.root,
          {
            [ classes.isBlack ]: black,
            [ classes.isBackLine ]: backLine,
            [ classes.hasAnchorLink ]: isAnchorLinkExist
          }
        ),
        id: isAnchorLinkExist && preparedAnchorId
      },
      <>
        { children }
        { isAnchorLinkExist && <span className={ classes.headingLink } onClick={onClickAnchor && onClickAnchor(preparedAnchorId)}></span> }
      </>
    )
  )
}

export default Heading
