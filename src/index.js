import React, { PureComponent, Fragment } from "react"
import PropTypes from "prop-types"

// import { ReactComponent as ScrollSVG } from "./assets/ancient-scroll.svg"
// const scrollImage = "https://i.imgur.com/CqkYoPm.png"
// const opacityMask = "https://i.imgur.com/4AUs6ML.png"

import styles from "./styles.css"

// const scrollStyle = {
//   backgroundImage: `url(${scrollImage})`,
//   maskImage: `url(${opacityMask})`,
// }

export default class ExampleComponent extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
  }

  render() {
    const { children } = this.props

    return (
      <Fragment>
        <div className={styles.AncientScroll}>
          <div className={styles.skew}>{children}</div>
        </div>
        <div className={styles.AncientScrollBkg} />
      </Fragment>
    )
  }
}
