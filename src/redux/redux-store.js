import {combineReducers, createStore} from "redux";
import optionsReducer from "../components/reducers/options-reducer";
import accountReducer from "../components/reducers/account-reducer";
import frontReducer from "../components/reducers/front-reducer";
import accountsReducer from "../components/reducers/accounts-reducer";

let reducers =
	combineReducers({
		account: accountReducer,
		front: frontReducer,
		panel: combineReducers({
			accounts: accountsReducer,
			options: optionsReducer
		})
	});

let store = createStore(reducers);

window.store = store;

export default store;