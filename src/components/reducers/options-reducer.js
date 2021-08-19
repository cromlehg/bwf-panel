const ACTION_ADD_OPTION = 'ACTION_ADD_OPTION';
const ACTION_ADD_OPTIONS = 'ACTION_ADD_OPTIONS';

export const addOptionActionCreator = (name, value) => ({
	type: ACTION_ADD_OPTION,
	name: name,
	value: value
});

export const addOptionsActionCreator = (options) => ({
	type: ACTION_ADD_OPTIONS,
	options: options
});

let initialState = [];

const optionsReducer = (state = initialState, action) => {
	if (action.type === ACTION_ADD_OPTIONS) {
		return [...action.options];
	} else if (action.type === ACTION_ADD_OPTION) {
		let maxIndex = 0;
		state.forEach(t => {
			if (maxIndex <= t.id) {
				maxIndex = t.id + 1;
			}
		});
		return [...state, {id: maxIndex, name: action.name, value: action.value}];
	}
	return state;
}

export default optionsReducer;