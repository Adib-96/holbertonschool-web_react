import { shallow } from 'enzyme';
import React from "react";
import Notifications from './Notifications';


describe("test Notificacions", () => {
    //test that Notifications renders without crashing
    it("renders without crashing", () => {
        shallow(<Notifications />);
    });
    const wrapper = shallow(<Notifications />);
    //verify that Notifications renders three list items
    it("verify that Notifications renders three list items", () => {
        expect(wrapper.find('ul').children().length).toEqual(3);
    });
    //verify that Notifications renders the text Here is the list of notifications
    it("verify that Notifications renders the text Here is the list of notifications", () => {
        expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toEqual(true);
    });
   
}); 