import { MOBILE_REGISTER } from '../../Actions/Types';

const initialState = {
    name: '',
    mobile: ''
};

const mobileRegister = (state = initialState, action) => function() {
    switch (action.type) {
        case MOBILE_REGISTER:
            return {...state,};
        default:
            return state;
    }
}

export default mobileRegister();