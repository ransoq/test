import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

global.shallow = shallow;
global.render = render;
global.mount = mount;
// Обрушим тест при любой ошибке
console.error = message => {
    throw new Error(message);
};

Enzyme.configure({adapter: new Adapter()});