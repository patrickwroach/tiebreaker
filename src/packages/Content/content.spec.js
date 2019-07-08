import React from "react";
import { shallow, mount } from "enzyme";
import Content from ".";

describe("<Content />", () => {
  const wrapper = shallow(<Content />);
  const instance = wrapper.instance();

  it("renders without crashing", () => {
    shallow(<Content />);
  });


  it("should update buttonSection text on submitting answers ", () => {
    expect(wrapper.state("buttonText")).toBe("Break Tie");
    instance.clickFunctionSplitter();
    expect(wrapper.state("buttonText")).toBe("Reset");
  });

  it("should reset all elements of state when the buttonSection button reads Reset", () => {
    const wrapper = shallow(<Content />);
    const instance = wrapper.instance();
    const initialState = {
      answered: wrapper.state("answered"),
      buttonText: wrapper.state("buttonText")
    };

    //Call submitAnswers once, to set up a completed survey
    instance.clickFunctionSplitter();
    //Call again to reset;
    instance.clickFunctionSplitter();

    expect(wrapper.state("buttonText")).toBe(initialState.buttonText);
    expect(wrapper.state("answered")).toBe(initialState.answered);
  });
});
