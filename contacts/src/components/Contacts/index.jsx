import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'
import './styles.css'

function Contacts() {
  const [contacts, setContacts] = useState([{
    name: 'John',
    phone: '1234567890',
    id: 1
  },
  {
    name: 'Jane',
    phone: '0987654321',
    id: 2
  },
  {
    name: 'Jack',
    phone: '1234567890',
    id: 3
  }
]);

  useEffect(() => {
    if(Array.isArray(contacts)){
      contacts[contacts.length - 1].id = contacts.length;
    }
    console.log(contacts);
  }, [contacts]);
  
  return (
    <div id="container">
        <h1>Contacts</h1>
        <Form contacts={contacts} addContact={setContacts}/>        
        <List contacts={contacts}/>
    </div>

  )
}

export default Contacts