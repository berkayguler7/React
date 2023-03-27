import { useState, useEffect } from "react";
import "./Todo.css";
import Form from "./Form/Form.jsx";

function Todo() {
	const [todos, setTodos] = useState([]);
	const [display, setDisplay] = useState("todos");

	useEffect(() => {
		console.log(todos);
	}, [todos]);

	const incomplete = todos.filter((todo) => !todo.completed);
	const complete = todos.filter((todo) => todo.completed);

	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			})
		);
	};

	const deleteTodo = (id) => {
		setTodos([...todos.filter((todo) => todo.id !== id)]);
	};

	const clearCompleted = () => {
		setTodos([...todos.filter((todo) => !todo.completed)]);
	};

	const displayAll = () => {
		setDisplay("todos");
	};

	const displayIncomplete = () => {
		setDisplay("incomplete");
	};

	const displayComplete = () => {
		setDisplay("complete");
	};

	return (
		<div>
			<section className="todoapp">
				<header className="header">
					<h1>todos</h1>
					<Form todos={todos} setTodos={setTodos} />
				</header>

				<section className="main">
					<input className="toggle-all" type="checkbox" />
					<label htmlFor="toggle-all">Mark all as complete</label>

					<ul className="todo-list">
						{eval(display).map((todo, index) => {
							return (
								<li key={index} className={todo.completed ? "completed" : ""}>
									<div className="view">
										<input className="toggle" type="checkbox" checked={todo.completed}
										onChange={() => toggleComplete(todo.id)} />
										<label>{todo.title}</label>
										<button className="destroy" onClick={() => deleteTodo(todo.id)}></button>
									</div>
								</li>
							);
						})}
					</ul>
				</section>

				<footer className="footer">
					<span className="todo-count">
						<strong>{incomplete.length}</strong>
						items left
					</span>

					<ul className="filters">
						<li>
							<a href="#/" className="selected" onClick={displayAll}>
								All
							</a>
						</li>
						<li>
							<a href="#/" onClick={displayIncomplete}>Active</a>
						</li>
						<li>
							<a href="#/" onClick={displayComplete}>Completed</a>
						</li>
					</ul>

					<button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
				</footer>
			</section>

			<footer className="info">
				<p>Click to edit a todo</p>
				<p>
					Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
				</p>
				<p>
					Part of <a href="http://todomvc.com">TodoMVC</a>
				</p>
			</footer>
		</div>
	);
}

export default Todo;
