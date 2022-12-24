import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {setterReducer} from "./setterReducer";


export const rootReducer = combineReducers({
    counter: counterReducer,
    setter: setterReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store