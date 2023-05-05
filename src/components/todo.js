import React, { useEffect, useState } from 'react'
import { createTodo, getTodos } from '../utils/http-functions';
import TodoForm from './todo-form';
import TodoList from './todo-list';

export default function Todo () {
  const [todos, setTodos] = useState([]);


  const fetchTodos = async () => {
    try {
      const result = await getTodos();
      setTodos(result);
    }
    catch (e) {
      console.log(e);
    }
  }

  const editTodo = (todoId, newValue) => {
    setTodos(prev => prev.map(item => (item._id === todoId ? newValue : item)));
  }

  const addTodo = async (input) => {
    try {
      const result = await createTodo(input);
      console.log(result);
      if (result.status === 'success') {
        setTodos([...todos, result.data.todo]);
        console.log(result);
      }

    }
    catch (e) {
      console.log(e);

    }
  }


  useEffect(() => {
    fetchTodos()
  }, []);

  console.log(todos, 'todos here')
  return (
    <div><TodoForm setTodos={setTodos} todos={todos} handleSubmit={addTodo} />
      {todos?.length > 0 && <TodoList setTodos={setTodos} todos={todos} editTodo={editTodo} />}</div>
  )
}
;