import { useState } from 'react'

function Form({contacts, addContact}) {
    const [form, setForm] = useState({
        name: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name || !form.phone) return;

        addContact([...contacts,form]);
        setForm({
            name: '',
            phone: ''
        })
    };
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" placeholder="Name" name="name" value={form.name} onChange={handleChange} />
        </div>
        <div>
            <input type="text" placeholder="Phone" name="phone" value={form.phone} onChange={handleChange} />
        </div>
        <div>
            <button>Add Contact</button>
        </div>
    </form>
  )
}

export default Form