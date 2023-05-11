import React, { useState } from 'react';
import './App.css';
import UserList from './components/UserList/UserList';
import AddUser from './components/AddUser/AddUser';

const DUMMY_USER_LIST = [
	{
		id: 1,
		name: "Jake",
		age: 31,
	},
	{
		id: 2,
		name: "Adam",
		age: 32,
	},
	{
		id: 3,
		name: "Rose",
		age: 27,
	},
	{
		id: 4,
		name: "Anna",
		age: 58,
	},
]
function App() {
	const [userList, setUserList] = useState(DUMMY_USER_LIST);

	const addUserHandler = (user) => {
		console.log({ user });
		setUserList((prevUsers) => {
			return [...user, ...prevUsers];
		});

		console.log(user);
	}

	return (
		<div className="App">
			<AddUser onClickAddUser={addUserHandler} />
			<UserList users={userList} />
		</div>
	);
}

export default App;
