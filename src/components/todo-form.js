import React, { useRef } from 'react';

export default function TodoForm (props) {
  const { handleSubmit } = props;
  const inputEl = useRef(null);


  return (
    <form className='todo-form' onSubmit={() => handleSubmit(inputEl?.current?.value)}>
      <input
        type='text'
        ref={inputEl}
        placeholder='Add stuff here'
        className={'todo-input'}
        autoFocus={true}
      />
      <button type={'submit'} className={'button'}>Add</button>
    </form>
  )
}
