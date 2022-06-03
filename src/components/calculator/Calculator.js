import {useDispatch, useSelector} from "react-redux";
import {
	ADD_NUMBERS,
	CHANGE_NUM_ONE,
	CHANGE_NUM_TWO,
	DIV_NUMBERS,
	MUL_NUMBERS,
	SUB_NUMBERS
} from "../../modules/counter";

export function Calculator({_useDispatch = useDispatch, _useSelector = useSelector}) {
	const dispatch = _useDispatch();
	const result = _useSelector(state => state.result)

	function onNumOneChange(event) {
		dispatch({
			type: CHANGE_NUM_ONE,
			numOne: parseFloat(event.target.value)
		})
	}
	function onNumTwoChange(event) {
		dispatch({
			type: CHANGE_NUM_TWO,
			numTwo: parseFloat(event.target.value)
		})
	}

	return <>
		<input onChange={onNumOneChange} type="number" placeholder="First Number"/>
		<input onChange={onNumTwoChange} type="number" placeholder="Second Number"/>
		<button onClick={() => dispatch({type: ADD_NUMBERS})}> + </button>
		<button onClick={() => dispatch({type: SUB_NUMBERS})}> - </button>
		<button onClick={() => dispatch({type: MUL_NUMBERS})}> * </button>
		<button onClick={() => dispatch({type: DIV_NUMBERS})}> / </button>
		<div>Result: {result}</div>
	</>
}