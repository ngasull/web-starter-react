/* @flow */
import { Component, createElement } from "react"

export default class App extends Component {

  props: {
    onSwag?: () => any
  };

  render() {
    const { onSwag } = this.props

    return (
      <a
        href="#"
        onClick={ onSwag }
      >
        It works yo
      </a>
    )
  }
}
