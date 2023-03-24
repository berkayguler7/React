import {useState} from 'react'

function InputExample() {
    const [input, setInput] = useState('Default input');

    const onChangeName = (event) => {
        setInput(event.target.value);
    }

  return (
    <div>
        Please enter an input: 
        <br />
        <input type="text" value={input}  onChange={onChangeName} />
        <br />
        {input}
    </div>
  )
}

export default InputExample