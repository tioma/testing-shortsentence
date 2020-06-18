import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShortSentence from "./ShortSentence";

Enzyme.configure({ adapter: new Adapter() });

it("should match snapshot", () => {
  const wrapper = shallow(<ShortSentence />);

  expect(wrapper.html()).toMatchSnapshot();
});

it('should display a button with the label "cortar"', () => {
  const wrapper = shallow(<ShortSentence length={10} />);

  expect(wrapper.containsMatchingElement(<button>cortar</button>)).toBe(true);
});

it("should have an `input` element", () => {
  const wrapper = shallow(<ShortSentence length={10} />);

  expect(wrapper.containsMatchingElement(<input value={""} />)).toBe(true);
});

it("should trim a sentence", () => {
  const wrapper = shallow(<ShortSentence />);
});
