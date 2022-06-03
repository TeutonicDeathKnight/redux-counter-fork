import reducer, {
    ADD_COUNT,
    ADD_NUMBERS,
    CHANGE_NUM_ONE,
    CHANGE_NUM_TWO,
    DIV_NUMBERS,
    MUL_NUMBERS,
    SUB_NUMBERS
} from "./counter";

test(
    'should init to correct state',
    () => {
        const state = reducer()
        expect(state).toStrictEqual({
            count: 0,
            numOne: undefined,
            numTwo: undefined,
            result: null
        })
    }
)

test(
    'should add 1 to count when ADD_COUNT action is dispatched',
    () => {
        const initState = reducer();
        const state = reducer(initState, {type: ADD_COUNT})
        expect(state).toStrictEqual({
            ...initState,
            count: 1
        })
    }
)

test(
    'should add numOne and numTwo when ADD_NUMBERS action is dispatched',
    () => {
        const initState = {
            count: 0,
            numOne: 3,
            numTwo: 3,
            result: null
        }
        const action = {
            type: ADD_NUMBERS
        }
        const state = reducer(initState, action)
        expect(state).toStrictEqual({
            ...initState,
            result: '6'
        })
    })

test(
    'should subtract numOne from numTwo when SUB_NUMBERS action is dispatched',
    () => {
        const initState = {
            count: 0,
            numOne: 3,
            numTwo: 3,
            result: null
        }
        const action = {
            type: SUB_NUMBERS
        }
        const state = reducer(initState, action)
        expect(state).toStrictEqual({
            ...initState,
            result: '0'
        })
    })

test(
    'should multiply numOne and numTwo when MUL_NUMBERS action is dispatched',
    () => {
        const initState = {
            count: 0,
            numOne: 3,
            numTwo: 3,
            result: null
        }
        const action = {
            type: MUL_NUMBERS
        }
        const state = reducer(initState, action)
        expect(state).toStrictEqual({
            ...initState,
            result: '9'

        })
    })

test(
    'should divide numOne from numTwo when DIV_NUMBERS action is dispatched',
    () => {
        const initState = {
            count: 0,
            numOne: 3,
            numTwo: 3,
            result: null
        }
        const action = {
            type: DIV_NUMBERS
        }
        const state = reducer(initState, action)
        expect(state).toStrictEqual({
            ...initState,
            result: '1'

        })
    })

test(
    'should update numOne when CHANGE_NUM_ONE is dispatched',
    () => {
        const initState = reducer()
        const state = reducer(initState, {type: CHANGE_NUM_ONE, numOne: 1})
        expect(state).toStrictEqual({
            ...initState,
            numOne: 1
        })
    }
)

test(
    'should update numbers.numTwo when CHANGE_NUM_TWO is dispatched',
    () => {
        const initState = reducer();
        const state = reducer(initState, {type: CHANGE_NUM_TWO, numTwo: 2})
        expect(state).toStrictEqual({
            ...initState,
            numTwo: 2
        })
    }

)