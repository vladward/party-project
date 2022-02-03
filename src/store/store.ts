import { combineReducers, createStore } from "redux"
import {registerReducer} from "./reducers/registerReducer";
import {profileReducer} from "./reducers/profileReducer";
import {recoveryReducer} from "./reducers/recoveryReducer";
import {loginReducer} from "./reducers/loginReducer";
import {forgotPasswordReducer} from "./reducers/forgotPasswordReducer";
import {componentsReducer} from "./reducers/componentsReducer";

const rootReducer = combineReducers({
    register: registerReducer,
    profile: profileReducer,
    recovery: recoveryReducer,
    login: loginReducer,
    forgotten: forgotPasswordReducer,
    components: componentsReducer,
})

export const store = createStore(rootReducer)