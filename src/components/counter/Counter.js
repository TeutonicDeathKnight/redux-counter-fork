import {useDispatch, useSelector} from "react-redux";
import {ADD_COUNT} from "../../modules/counter";

export function Counter({_useDispatch = useDispatch, _useSelector = useSelector}) {
    const dispatch = _useDispatch();
    const count = _useSelector(state => state.count);

    return <>
        <div>Count: {count}</div>
        <button onClick={() => dispatch({type: ADD_COUNT})}>Add</button>
    </>
}