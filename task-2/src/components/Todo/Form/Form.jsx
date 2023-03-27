import { useState } from "react";

function Form({ todos, setTodos }) {
	const [form, setForm] = useState({
		title: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
        if (!form.title) return;
		setTodos([
			...todos,
			{
				id: todos[todos.length - 1]?.id + 1 || 1,
				title: form.title,
				completed: false,
			},
		]);
		setForm({
			title: '',
		});
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
                    type="text"
                    value={form.title}
                    onChange={handleChange}
					name="title"
					className="new-todo"
					placeholder="What needs to be done?"
					autoFocus
				/>
			</form>
		</div>
	);
}

export default Form;
