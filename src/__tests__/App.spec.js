// @flow
jest.unmock("../App")
import { shallow } from "enzyme"
import { createElement } from "react"
import sinon from "sinon"
import App from "../App"

describe("<App />", () => {

  it("Emits some swag", () => {
    const onSwag = sinon.spy()
    const app = shallow(
      <App
        appText="stub text"
        onSwag={ onSwag }
      />
    )
    expect(app.find("a").text()).toEqual("stub text")
    app.find("a").simulate("click")
    expect(onSwag.calledOnce).toBe(true)
  })
})
