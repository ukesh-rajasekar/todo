import React, { useRef } from 'react';

export default function TodoUpdateForm (props) {
    const { handleSubmit, cancelUpdate } = props;
    const updateEl = useRef(null);



    return (
        <form className='todo-form' onSubmit={() => handleSubmit(updateEl?.current?.value)}>
            <input
                type='text'
                ref={updateEl}
                placeholder='update'
                className={'update-input'}
                autoFocus={true}
            />
            <button className={'button'} id={'cancel-button'} onClick={cancelUpdate}>cancel</button>
            <button type={'submit'} className={'button'} id={'update-button'}>update</button>
        </form>
    )
}
