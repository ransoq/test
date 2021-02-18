import React from "react";
import SearchBar from "./searchBar";
import {shallow} from "enzyme";

describe("Testing <SearchBar />", () => {
    it("should save cookie after submit", () => {
        const value = "UCE9ODjNIkOHrnSdkYWLfYhg"
        const onSubmit = jest.fn();
        const wrapper = shallow(<SearchBar handleFormSubmit={onSubmit} />)

        expect(wrapper).toMatchSnapshot();

        wrapper.find('button').simulate('submit', {target: {value}});
        expect(onSubmit).toBe(value);
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: `lastFoundedChannel=UCE9ODjNIkOHrnSdkYWLfYhg`,
        });
    });
});