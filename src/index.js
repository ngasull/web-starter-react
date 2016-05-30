// @flow
import { createElement } from "react"
import { render } from "react-dom"
import { AppContainer } from "./AppContainer"

const root = document.createElement("div")
render(<AppContainer />, root)
document.body.appendChild(root)
