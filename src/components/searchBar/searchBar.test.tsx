import React from "react";
import SearchBar from "./searchBar";
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from "enzyme";

configure({adapter: new Adapter()});

describe("Testing <SearchBar />", () => {

    const onSubmit = jest.fn();

    it("SearchBar have rendered correctly", () => {
        const wrapper = shallow(<SearchBar handleFormSubmit={onSubmit}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it("cookies are empty", () => {
        const wrapper = shallow(<SearchBar handleFormSubmit={onSubmit}/>);

        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: ``,
        });
    });

    it("should save cookie after submit", () => {
        const wrapper = shallow(<SearchBar handleFormSubmit={onSubmit}/>);
        const value = "UCE9ODjNIkOHrnSdkYWLfYhg";
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };

        wrapper.find('button').simulate('submit', fakeEvent);
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: `lastFoundedChannel={value}`,
        });
    });
});