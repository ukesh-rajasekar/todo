import React, { useState } from 'react';

export default function TodoUpdateForm (props) {
    const { handleSubmit, cancelUpdate } = props;
    const [update, setupdate] = useState('');

    const handleChange = (e) => setupdate(e.target.value);

    console.log(update, 'input here')
    return (
        <form className='todo-form' onSubmit={() => handleSubmit(update)}>
            <input
                type='text'
                placeholder='update'
                value={update}
                className={'update-input'}
                autoFocus={true}
                onChange={handleChange}
            />
            <button className={'button'} id={'cancel-button'} onClick={cancelUpdate}>cancel</button>
            <button type={'submit'} className={'button'} id={'update-button'}>update</button>
        </form>
    )
}
