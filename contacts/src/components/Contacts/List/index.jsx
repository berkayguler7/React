import React from "react";

function List({ contacts }) {
	const [filter, setFilter] = React.useState("");

	const filtered = contacts.filter((contact) => {
		return Object.keys(contact).some((key) =>
			contact[key].toString().toLowerCase().includes(filter.toLowerCase())
		);
	});

	return (
		<div>
			<input
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
				placeholder="filter contacts"
			/>
			<ul className="list">
				{filtered.map((contact) => (
					<li key={contact.id}>
						<span>{contact.name}</span>
						<span>{contact.phone}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default List;
