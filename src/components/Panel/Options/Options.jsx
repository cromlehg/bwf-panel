import React from "react";
import styles from './Options.module.css';
import axios from "axios";
import DataGrid from "../common/DataGrid/DataGrid";
import Box from "../common/Box/Box";
import axiosConfig from "../../../axiosConfig";

const Options = (props) => {

	let items = props.options;
	if (items.length === 0) {
		axios.get(axiosConfig.baseUrl + '/options', {
			auth: {
				username: axiosConfig.uname,
				password: axiosConfig.pass
			}
		}).then(function (response) {
			props.addOptions(response.data);
		}).catch(function (error) {
			console.log('Error: ', error);
		});
	}

	let preparedProps = {
		header: [
			{name: "id", styles: styles.options__header_col_id},
			{name: "name", styles: styles.options__header_col_name},
			{name: "type", styles: styles.options__header_col_type},
			{name: "value", styles: styles.options__header_col_value},
			{name: "description", styles: styles.options__header_col_description}
		],
		body: [
			{name: "id", styles: styles.options__body_col_id},
			{name: "name", styles: styles.options__body_col_name},
			{name: "type", styles: styles.options__header_col_type},
			{name: "value", styles: styles.options__body_col_value},
			{name: "description", styles: styles.options__header_col_description}
		],
		data: items.map(t => [t.id, t.name, t.type, t.value, t.description])
	}

	return (
		<Box>
			<DataGrid state={preparedProps}/>
		</Box>
	);

}

export default Options;

