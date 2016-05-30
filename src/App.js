// @flow
import { Component, createElement } from "react"

export default class App extends Component {

  props: {
    appText: string,
    onSwag: () => any,
  };

  render() {
    const { appText, onSwag } = this.props

    return (
      <a
        href="#"
        onClick={ onSwag }
      >
        { appText }
      </a>
    )
  }
}
