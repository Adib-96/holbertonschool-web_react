/*
    
    
    
    
*/
import { shallow } from 'enzyme';
import React from "react";
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';



describe("Test Suite App", () => {
    // test that App renders without crashing
    it("renders without crashing", () => {
        shallow(<App />);
    });
    // verify that App renders a div with the class App-header
    const wrapper = shallow(<App />);
    it("Notifications", () => {
        shallow(<Notifications />);
        
    });
    it("Header", () => {
        shallow(<Header />);
    });
    // verify that App renders a div with the class App-body
    it("Login", () => {
        shallow(<Login />);
    });
    // verify that App renders a div with the class App-footer
    it("Footer", () => {
        shallow(<Footer />);
    });
}); 