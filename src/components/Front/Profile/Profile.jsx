import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {

	return (
		<div className={styles.profile}>
			<div>avatar</div>
			<div>ava + description</div>
			<MyPosts/>
		</div>
	);

}

export default Profile;