const ACTION_ADD_OPTIONS = 'ACTION_ADD_OPTIONS';

export const addOptionsActionCreator = (options) => ({
	type: ACTION_ADD_OPTIONS,
	options: options
});

let initialState = [];

const optionsReducer = (state = initialState, action) => {
	if (action.type === ACTION_ADD_OPTIONS) {
		return [...action.options];
	}
	return state;
}

export default optionsReducer;