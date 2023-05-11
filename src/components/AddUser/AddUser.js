import React, { useState } from "react";
import Prompt from "../UI/Prompt";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
	const [userName, setUserName] = useState('');
	const [userAge, setUserAge] = useState('');
	const [isValid, setIsValid] = useState(false);
	const [isError, setIsWarning] = useState(false);

	const onSubmithandler = (event) => {
		event.preventDefault();

		if (userName.trim().length === 0 || userAge.length === 0) {
			setIsWarning(true);
			return;
		}

		if (+userAge < 1 || Number.isNaN(+userAge)) {
			setIsWarning(true);
			return;
		}
		setIsValid(true);
	}

	const setUserNameHandler = (event) => {
		let name = event.target.value.toString();
		setUserName(name);
	}

	const setUserAgeHandler = (event) => {
		let age = event.target.value.toString();
		setUserAge(age);
	}

	const promptHandler = (valid) => {
		if (valid) {
			const data = [
				{
					name: userName,
					age: userAge,
					id: Math.random().toString()
				}
			];
			props.onClickAddUser(data);
			setUserName('');
			setUserAge('');
			setIsWarning(false);
		}
		setIsValid(false);
	}
	const onWarningDismiss = () => {
		setIsWarning(false);
	}

	return <div>
		{isError && <ErrorModal onWarningDismiss={onWarningDismiss} />}
		<form onSubmit={onSubmithandler}>
			<h1>Add User.</h1>
			<label>Name : </label>
			<input
				name="user-name"
				type="text"
				value={userName}
				onChange={setUserNameHandler} />
			<label>Age :</label>
			<input
				name="user-age"
				type="number"
				value={userAge}
				onChange={setUserAgeHandler} />
			<button type="submit">Add user</button>
		</form>
		{isValid && <Prompt onPromptConfirm={promptHandler} />}
	</div>;
}

export default AddUser; 