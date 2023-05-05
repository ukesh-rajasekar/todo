import React, { useEffect, useState } from 'react'
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { deleteTodo, updateTodo } from '../utils/http-functions';
import TodoForm from './todo-form';

export default function TodoList (props) {

  const [edit, setEdit] = useState({
    _id: '',
    text: ''
  });

  const { todos, setTodos, editTodo } = props;

  const submitUpdate = value => {
    editTodo(edit._id, edit.text);
    updateTodo(edit._id, { update: { name: edit.text } });
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

  if (edit._id) {
    return (<TodoForm setTodos={setTodos} todos={todos} />)
  }


  return todos.map((todo, index) => (
    <div key={todo._id}>
      {todo.name}
      <div className='icons'>
        <RiCloseCircleLine onClick={() => removeTodo(todo._id, index)} className={'delete-icon'} />
        <TiEdit onClick={() => setEdit({ _id: todo._id, text: todo.name })
        } className={'edit-icon'} />
      </div>
    </div>
  ))
}
