import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallowToJson } from "enzyme-to-json";
import Link from "./Link";

//React 16
Enzyme.configure({ adapter: new Adapter() });

describe("Link", () => {
  it("should render correctly", () => {
    const wrapper1 = shallow(<Link title="tester" url="https://test.com" />);
    expect(shallowToJson(wrapper1)).toMatchSnapshot();
    const wrapper2 = shallow(<Link title="test" url="https://test.com" />);
    expect(shallowToJson(wrapper2)).toMatchSnapshot();
  });

  it("should handle the click event", () => {
    window.alert = jest.fn();
    const wrapper = shallow(<Link title="tester" url="https://test.com" />);
    wrapper.simulate("click");
    expect(window.alert).toHaveBeenCalledWith("clicked");
  });

  it("should have rendered props correctly", () => {
    const wrapper = shallow(<Link title="tester" url="https://test.com" />);
    expect(wrapper.props().href).toEqual("https://test.com");
    expect(wrapper.props().children).toEqual("tester");
  });

  it("should handle state changes", () => {
    const wrapper = shallow(<Link title="tester" url="https://test.com" />);
    expect(wrapper.state().clicked).toBeFalsy();
    wrapper.simulate("click");
    expect(wrapper.state().clicked).toBeTruthy();
  });
});
