import { shallow } from 'enzyme';
import React from "react";
import Header from './Header';

describe("Test Suite Header", () => {
    it("renders without crashing", () => {
        shallow(<Header />);
    });
    const wrapper = shallow(<Header />);
    it("Verify that the components render img tags", () => {
        expect(wrapper.find('img').exists()).toEqual(true);
        expect(wrapper.find('h1').exists()).toEqual(true);
    });
    it("Verify that the components render h1 tags", () => {
        expect(wrapper.find('h1').exists()).toEqual(true);
    });
})