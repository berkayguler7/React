import { useState, useEffect } from "react";

function Counter() {
	const [number, setNumber] = useState(0);

	useEffect(() => {
		console.log("useEffect called");

		const interval = setInterval(() => {
			setNumber((number) => number + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [number]);

	useEffect(() => {
		console.log("state changed");
	}, []);
	return (
		<div>
			<h1>{number}</h1>
			<button onClick={() => setNumber(number + 1)}>Increment</button>
		</div>
	);
}

export default Counter;
