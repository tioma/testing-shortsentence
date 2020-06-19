import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ShortSentence from "./ShortSentence";

Enzyme.configure({ adapter: new Adapter() });


describe('<ShortSentence />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ShortSentence length={1} />)
  })

  describe('component render', () => {
    it('should match snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
    })

    it('should display a button with the label "cortar"', () => {
      expect(wrapper.containsMatchingElement(<button>cortar</button>)).toBe(true);
    });

    it("should have an `input` element", () => {
      expect(wrapper.containsMatchingElement(<input value={""} />)).toBe(true);
    });
  })

  it("should trim a sentence", () => {
    const instance = wrapper.instance();
    const input = wrapper.find('input');
    const button = wrapper.find('button');

    console.log(input.debug());
    console.log(button.length);

    expect(instance.state.sentence).toEqual('');

    const mockEventChange = { target: { value: 'una oración de prueba' }}
    input.simulate('change', mockEventChange);

    expect(instance.state.sentence).toEqual('una oración de prueba')

    button.simulate('click')

    expect(instance.state.shortSentence).toEqual("u...")
  });
})
