import * as actions from '../actions/question';

const initialState = {
	question: [],
	loading: false,
	error: null
};

export default function questionReducer(state = initialState, action) {
	if (action.type === actions.FETCH_QUESTION_REQUEST) {
		return Object.assign({}, state, {
			loading: true
		});
    }
	if (action.type === actions.FETCH_QUESTION_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			question: action.question
		});
    }
    if (action.type === actions.FETCH_QUESTION_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		});
    }
    return state;     
}