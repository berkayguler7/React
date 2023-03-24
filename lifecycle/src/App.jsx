import { useState } from "react";
import Counter from "./components/Counter";

function App() {
	const [isVisible, setIsVisible] = useState(true);

	return (
		<div>
			{isVisible && <Counter />}
			<button onClick={() => setIsVisible(false)}>Hide</button>
			<button onClick={() => setIsVisible(true)}>Show</button>
		</div>
	);
}

export default App;

