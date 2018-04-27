import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./App";

//import Adapter from "enzyme-adapter-react-15";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("is polite", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains("Welcome to React")).toEqual(true);
});
