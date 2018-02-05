import React from "react";
import ReactDOM from "react-dom";

import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallowToJson } from "enzyme-to-json";
import App from "../App";
import Link from "../Link";

//React 16
Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("should have 3 link components", () => {
    const wrapper = mount(<App />);
    //console.log(wrapper.debug());
    expect(wrapper.find(Link).length).toEqual(3);
  });

  it("should have App css class", () => {
    const wrapper = mount(<App />);
    //console.log(wrapper.find(".App").debug());
    expect(wrapper.find("div.App").length).toEqual(1);
  });
});
