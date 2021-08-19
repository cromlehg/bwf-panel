import {addOptionActionCreator, addOptionsActionCreator} from "../../reducers/options-reducer";
import Options from "./Options";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
	options: state.panel.options
})

let mapDispatchToProps = (dispatch) => ({
	addOption: (name, value) => {
		dispatch(addOptionActionCreator(name, value));
	},
	addOptions: (options) => {
		dispatch(addOptionsActionCreator(options));
	},
})

const OptionsContainer = connect(mapStateToProps, mapDispatchToProps)(Options);

export default OptionsContainer;

