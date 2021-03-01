import React from "react";
import Header from "./header";
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from "enzyme";

configure({adapter: new Adapter()});

describe("Testing <Header />", () => {

    it("Header have rendered correctly", () => {
        const header = shallow(<Header />);
        expect(header).toMatchSnapshot();
    });
});