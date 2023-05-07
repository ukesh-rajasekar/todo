import React, { useState } from 'react';
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { deleteAllTodo, deleteTodo, updateTodo } from '../utils/http-functions';
import TodoUpdateForm from './todo-update-form';
import Modal from '../UI/modal';

export default function TodoList (props) {

  const [removeAll, setRemoveAll] = useState(false);

  const [edit, setEdit] = useState({
    _id: '',
    text: ''
  });

  const { todos, setTodos, editTodo } = props;

  const submitUpdate = async (value) => {
    const result = await updateTodo(edit._id, { update: { name: value } });;
    editTodo(edit._id, result);
    setEdit({
      _id: '',
      text: ''
    });
  }


  const removeTodo = (id, index) => {
    deleteTodo(id);
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const removeAllItems = async () => {
    const result = await deleteAllTodo();
    if (result) {
      setTodos([]);
      setRemoveAll(false);
    }
  };



  return (<><div className='listTitle'><h1>To-do List </h1>   <button title="clear the list" className={'button'} onClick={() => { setRemoveAll(true) }}>Clear</button></div>{todos.map((todo, index) => (
    <div key={todo._id}>
      {edit?._id === todo._id ? (<div><TodoUpdateForm setTodos={setTodos} todos={todos} handleSubmit={submitUpdate} cancelUpdate={() => setEdit({ _id: '', text: '' })} />
      </div>) : (
        <div className='item'>
          <input
            type="checkbox" />
          <label>{todo.name}</label>
          <div className='icons'>
            <RiCloseCircleLine onClick={() => removeTodo(todo._id, index)} className={'delete-icon'} />
            <TiEdit onClick={() => setEdit({ _id: todo._id, text: todo.name })
            } className={'edit-icon'} />
          </div>
        </div>)}
    </div>
  ))}
    {removeAll && <Modal onSubmit={removeAllItems} onCancel={() => setRemoveAll(false)} title={`Do you want to delete all items in your todo list?`} />}
  </>)
}
