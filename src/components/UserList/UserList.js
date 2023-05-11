const UserList = (props) => {
	return <div>
		<ul>
			{props.users.map((user) => {
				return <li key={user.id}>{user.name} is {user.age} year's old</li>
			})}
		</ul>
	</div>;
}

export default UserList;
