import { shallow } from 'enzyme';
import React from "react";
import Notifications from './Notifications';


describe("Test Suite Notificacions", () => {
    //test that Notifications renders without crashing
    it("renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        shallow(<Notifications />);
        expect(wrapper.exists());
    });
    const wrapper = shallow(<Notifications />);
    it("verify that Notifications renders three list items", () => {
        expect(wrapper.find('ul').children().length).toEqual(3);
    });
    it("verify that Notifications renders the text Here is the list of notifications", () => {
        expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toEqual(true);
    });
}); 