import React, { useEffect, useState } from 'react'
import { createTodo, getTodos } from '../utils/http-functions';
import TodoForm from './todo-form';
import TodoList from './todo-list';
import toast, { Toaster } from 'react-hot-toast';

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
    toast.loading('adding to your list...');
    try {
      const result = await createTodo(input);
      console.log(result);
      if (result.status === 'success') {
        toast.success('item added');
        setTodos([...todos, result.data.todo]);
        console.log(result);
      }

    }
    catch (e) {
      toast.error('something went wrong, try again!');
      console.log(e);

    }
  }


  useEffect(() => {
    fetchTodos()
    console.log('*********************');
  }, []);

  console.log(todos, 'todos here')
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={0}
        toastOptions={{
          // Define default options
          className: '',
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
          loading: {
            duration: 3000,
            theme: {
              primary: 'grey',
              secondary: 'black',
            },
          },
        }}
      />
      <section id='addItemContainer'><TodoForm setTodos={setTodos} todos={todos} handleSubmit={addTodo} /></section>
      {todos?.length > 0 && <section id='listContainer'><TodoList setTodos={setTodos} todos={todos} editTodo={editTodo} /></section>}</>
  )
}
;