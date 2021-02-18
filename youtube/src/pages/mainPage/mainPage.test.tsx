import React from "react";
import MainPage from "./mainPage";
import {shallow} from "enzyme";

describe("Testing <MainPage/>", () => {
    it("MainPage have rendered correctly", () => {
        const page = shallow(<MainPage/>);
        expect(page).toMatchSnapshot();
    });
});