import { useEffect, useState } from "react";
import axios from "axios";
function Users() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	fetch("https://jsonplaceholder.typicode.com/users")
	// 		.then((response) => response.json())
	// 		.then((json) => setUsers(json))
	// 		.catch((error) => console.log(error))
	// 		.finally(() => setLoading(false));
	// }, []);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

	return (
		<div>
			<h1>Users</h1>
			{loading && <p>Loading...</p>}
			<ul style={{ listStyleType: "none" }}>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}

export default Users;
