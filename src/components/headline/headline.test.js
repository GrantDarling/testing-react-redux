import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAttribute } from "../../Utils/";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Description",
      };
      wrapper = setUp(props);
    });

    it("should render without errors", () => {
      const component = findByTestAttribute(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("should render the header", () => {
      const h1 = findByTestAttribute(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("should render the description", () => {
      const description = findByTestAttribute(wrapper, "desc");
      expect(description.length).toBe(1);
    });
  });

  describe("Have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("should not render", () => {
      const component = findByTestAttribute(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
