import {SetterType} from "../App";

const initialState: SetterType = {maxValue: 99, startValue: 0}

export const setterReducer = (state: SetterType = initialState, action: GeneralACType) => {
    switch (action.type) {
        case 'SET-MAX-VALUE': {
            return {...state, maxValue: action.payload.maxValue}
        }
        case "SET-START-VALUE": {
            return {...state, startValue: action.payload.startValue}
        }
        default:
            return state
    }
}

export type GeneralACType = SetMaxValueACType | SetStartValueACType
export type SetMaxValueACType = ReturnType<typeof setMaxValueAC>
export type SetStartValueACType = ReturnType<typeof setStartValueAC>
// export type SetValuesACType = ReturnType<typeof setValuesAC>

export const setMaxValueAC = (maxValue: number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {
            maxValue
        }
    } as const
}
export const setStartValueAC = (startValue: number) => {
    return {
        type: 'SET-START-VALUE',
        payload: {
            startValue
        }
    } as const
}
// export const setValuesAC = (startValue: number, maxValue: number) => {
//     return {
//         type: 'SET-VALUES',
//         payload: {
//             startValue, maxValue
//         }
//     } as const
// }