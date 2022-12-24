import {CounterType} from "../App";

const initialState: CounterType = {score: 0, maxScore: 5, startScore: 0}

export const counterReducer = (state: CounterType = initialState, action: GeneralACType) => {
    switch (action.type) {
        case 'INCREASE-SCORE': {
            return {...state, score: ++state.score}
        }
        case 'DECREASE-SCORE': {
            return {...state, score: --state.score}
        }
        case 'RESET-SCORE': {
            return {...state, score: action.payload.startValue}
        }
        case 'SET-VALUES': {
            return {...state, score: action.payload.startValue, maxScore: action.payload.maxValue, startScore: action.payload.startValue }
        }
        default:
            return state
    }
}

export type GeneralACType = IncreaseScoreACType | DecreaseScoreACType | ResetScoreACType | SetValuesACType
export type IncreaseScoreACType = ReturnType<typeof increaseScoreAC>
export type DecreaseScoreACType = ReturnType<typeof decreaseScoreAC>
export type ResetScoreACType = ReturnType<typeof resetScoreAC>
export type SetValuesACType = ReturnType<typeof setValuesAC>

export const increaseScoreAC = () => {
    return {
        type: 'INCREASE-SCORE',
    } as const
}
export const decreaseScoreAC = () => {
    return {
        type: 'DECREASE-SCORE',
    } as const
}
export const resetScoreAC = (startValue: number) => {
    return {
        type: 'RESET-SCORE',
        payload: {
            startValue
        }
    } as const
}
export const setValuesAC = (startValue: number, maxValue: number) => {
    return {
        type: 'SET-VALUES',
        payload: {
            startValue, maxValue
        }
    } as const
}