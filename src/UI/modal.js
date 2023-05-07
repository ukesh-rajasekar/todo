import React from 'react'

export default function Modal (props) {
    const { title, onCancel, onSubmit } = props;
    return (
        <div className='modal'>  <div className='modal-container'><h3>{title}</h3>
            <div className='modal-button-container'>
                <button className='cancel-button' onClick={onCancel}>no</button>
                <button className='update-button' onClick={onSubmit}>yes</button>
            </div>
        </div>
        </div>
    )
}
