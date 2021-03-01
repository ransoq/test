import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adatper: new Adapter()});

const config = {
    "jest": {
        "setupTestFrameworkScriptFile": "jest-extended"
    }
}

export default config;