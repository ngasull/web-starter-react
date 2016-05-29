/* @flow */
jest.unmock("../App")
import { shallow } from "enzyme"
import { createElement } from "react"
import sinon from "sinon"
import App from "../App"

describe("<App />", () => {

  it("Emits some swag", () => {
    const onSwag = sinon.spy()
    const app = shallow(
      <App onSwag={ onSwag } />
    )
    app.find("a").simulate("click")
    expect(onSwag.calledOnce).toBe(true)
  })
})
