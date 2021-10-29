import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttribute } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  describe("Nested", () => {
    it("should render without errors", () => {
      // console.log(component.debug()); // used to debug
      const wrapper = findByTestAttribute(component, "header");
      expect(wrapper.length).toBe(1);
    });

    it("should render a logo", () => {
      const logo = findByTestAttribute(component, "logo");
      expect(logo.length).toBe(1);
    });
  });
});
