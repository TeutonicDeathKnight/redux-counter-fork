import {screen, render} from "@testing-library/react";
import {Calculator} from "./Calculator";
import userEvent from "@testing-library/user-event";
import {
	ADD_NUMBERS,
	CHANGE_NUM_ONE,
	CHANGE_NUM_TWO,
	DIV_NUMBERS,
	MUL_NUMBERS,
	SUB_NUMBERS
} from "../../modules/counter";

test(
	'should show input with type number with placeholder "First Number"',
	() => {
		render(<Calculator _useDispatch={() => {}} _useSelector={() => {}}/>)
		const inputOne = screen.getByPlaceholderText('First Number')
		expect(inputOne.tagName).toBe('INPUT')
		expect(inputOne).toHaveAttribute('type', 'number')
})

test(
	'should show input with type number with placeholder "Second Number"',
	() => {
		const defaultValue = {}
		render(<Calculator _useDispatch={() => {}} _useSelector={() => {}}/>)
		const inputTwo = screen.getByPlaceholderText('Second Number')
		expect(inputTwo.tagName).toBe('INPUT')
		expect(inputTwo).toHaveAttribute('type', 'number')
	}
)

test(
	'should show button with text "+"',
	() => {
		render(<Calculator _useDispatch={() => {}} _useSelector={() => {}}/>)
		const buttonAdd = screen.getByText('+')
		expect(buttonAdd.tagName).toBe('BUTTON')
	}
)

test(
	'should show button with text "-"',
	() => {
		render(<Calculator _useDispatch={() => {}} _useSelector={() => {}}/>)
		const buttonSub = screen.getByText('-')
		expect(buttonSub.tagName).toBe('BUTTON')
	}
)

test(
	'should show button with text "*"',
	() => {
		render(<Calculator _useDispatch={() => {}} _useSelector={() => {}}/>)
		const buttonMul = screen.getByText('*')
		expect(buttonMul.tagName).toBe('BUTTON')
	}
)

test(
	'should show button with text "/"',
	() => {
		render(<Calculator _useDispatch={() => {}} _useSelector={() => {}}/>)
		const buttonDiv = screen.getByText('/')
		expect(buttonDiv.tagName).toBe('BUTTON')
	}
)

test(
	'should show a div with text "Result: {result}"',
	() => {
		const _useSelector = (fn) => {
			return fn({result: 1})
		}
		render(<Calculator _useDispatch={() => {}} _useSelector={_useSelector}/>)

		expect(screen.getByText('Result: 1')).toBeInTheDocument();
	}
)

test(
	'should dispatch ADD_NUMBERS event when "+" button is clicked',
	() => {
		const dispatch = jest.fn();
		render(<Calculator _useDispatch={() => dispatch} _useSelector={() => {}}/>)
		const button = screen.getByText('+');
		userEvent.click(button)
		expect(dispatch).toHaveBeenCalledWith({
			type: ADD_NUMBERS
		})
	}
)

test(
	'should dispatch SUB_NUMBERS event when "-" button is clicked',
	() => {
		const dispatch = jest.fn()
		render(<Calculator _useDispatch={() => dispatch} _useSelector={() => {}}/>)
		const button = screen.getByText('-')
		userEvent.click(button)
		expect(dispatch).toHaveBeenCalledWith({
			type: SUB_NUMBERS
		})
	}
)

test(
	'should dispatch MUL_NUMBERS event when "*" button is clicked',
	() => {
		const dispatch = jest.fn()
		render(<Calculator _useDispatch={() => dispatch} _useSelector={() => {}}/>)
		const button = screen.getByText('*')
		userEvent.click(button)
		expect(dispatch).toHaveBeenCalledWith({
			type: MUL_NUMBERS
		})
	}
)

test(
	'should dispatch DIV_NUMBERS event when "/" button is clicked',
	() => {
		const dispatch = jest.fn()
		render(<Calculator _useDispatch={() => dispatch} _useSelector={() => {}}/>)
		const button = screen.getByText('/')
		userEvent.click(button)
		expect(dispatch).toHaveBeenCalledWith({
			type: DIV_NUMBERS
		})
	}
)

test(
	'should dispatch CHANGE_NUM_ONE event with numOne input value',
	() => {
		const dispatch = jest.fn();
		render(<Calculator _useDispatch={() => dispatch} _useSelector={() => {}}/>)
		const inputOne = screen.getByPlaceholderText('First Number');
		userEvent.type(inputOne, "1")

		expect(dispatch).toHaveBeenCalledWith({
			type: CHANGE_NUM_ONE,
			numOne: 1
		})
	}
)

test(
	'should dispatch CHANGE_NUM_TWO event with numTwo input value',
	() => {
		const dispatch = jest.fn();
		render(<Calculator _useDispatch={() => dispatch} _useSelector={() => {}}/>)
		const inputTwo = screen.getByPlaceholderText('Second Number')
		userEvent.type(inputTwo, '2')

		expect(dispatch).toHaveBeenCalledWith({
			type: CHANGE_NUM_TWO,
			numTwo: 2
		})
	}
)