// @flow
import { Component, createElement } from "react"
import App from "./App"

export class AppContainer extends Component {

  state: {
    appText: string
  };

  constructor() {
    super(...arguments)
    this.state = {
      appText: "It works yo"
    }
  }

  render() {
    const { appText } = this.state

    return (
      <App
        appText={ appText }
        onSwag={ () => alert("GG, you swag") }
      />
    )
  }
}
