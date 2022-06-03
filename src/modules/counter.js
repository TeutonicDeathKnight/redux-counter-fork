export const ADD_COUNT = 'counter/ADD_COUNT'
export const ADD_NUMBERS = 'counter/ADD_NUMBERS'
export const SUB_NUMBERS = 'counter/SUB_NUMBERS'
export const MUL_NUMBERS = 'counter/MUL_NUMBERS'
export const DIV_NUMBERS = 'counter/DIV_NUMBERS'
export const CHANGE_NUM_ONE = 'counter/CHANGE_NUM_ONE'
export const CHANGE_NUM_TWO = 'counter/CHANGE_NUM_TWO';

const initState = {
    count: 0,
    numOne: undefined,
    numTwo: undefined,
    result: null
}

export default function reducer(state = initState, action) {
    const resultFormat = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        maximumFractionDigits: 2
    })

    switch (action?.type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case CHANGE_NUM_ONE:
            return {
                ...state,
                numOne: action.numOne,
            }
        case CHANGE_NUM_TWO:
            return {
                ...state,
                numTwo: action.numTwo
            }
        case ADD_NUMBERS:
            return {
                ...state,
                result: resultFormat.format(state.numOne + state.numTwo)
            }
        case SUB_NUMBERS:
            return {
                ...state,
                result: resultFormat.format(state.numOne - state.numTwo)
            }
        case MUL_NUMBERS:
            return {
                ...state,
                result: resultFormat.format(state.numOne * state.numTwo)
            }
        case DIV_NUMBERS:
            return {
                ...state,
                result: resultFormat.format(state.numOne / state.numTwo)
            }
        default:
            return {
                ...state
            }
    }
}