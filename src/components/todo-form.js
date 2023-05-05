import React, { useState } from 'react';

export default function TodoForm (props) {
  const { handleSubmit } = props;
  const [input, setInput] = useState('');

  const handleChange = (e) => setInput(e.target.value);


  return (
    <form className='todo-form' onSubmit={() => handleSubmit(input)}>
      <input
        type='text'
        placeholder='Add stuff here'
        value={input}
        className={'todo-input'}
        onChange={handleChange}
      />
      <button className={'todo-button'}>Add</button>
    </form>
  )
}
