const getTodos = async () => {
    try {
        const response = await fetch('http://localhost:3006/api/v1/todo/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log(result, 'todos-fetched');
        if (result.status === 'success') {
            return result.data.todos;
        }
    }
    catch (e) {
        console.log(e);
    }
}

const createTodo = async (input) => {
    try {
        const response = await fetch('http://localhost:3006/api/v1/todo/', {
            method: 'POST',
            body: JSON.stringify({ name: input }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log(result, 'todos-created');
        if (result.status === 'success') {
            return result.data.todo;
        }

    }
    catch (e) {
        console.log(e);

    }
}

const deleteTodo = async (id) => {
    try {
        const response = await fetch(`http://localhost:3006/api/v1/todo/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log(result, 'todos-deleted');
        if (result.status === 'success') {
            return true;
        }
    }
    catch (e) {
        console.log(e);
    }
}

const deleteAllTodo = async () => {
    try {
        const response = await fetch(`http://localhost:3006/api/v1/todo/todos/removeAll`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log(result, 'todos-deleted');
        if (result.status === 'success') {
            return true;
        }
    }
    catch (e) {
        console.log(e);
    }
}

const updateTodo = async (id, update) => {
    console.log(`updating id: ${id} - value: ${JSON.stringify(update)}`)
    try {
        const response = await fetch(`http://localhost:3006/api/v1/todo/${id}`, {
            method: 'PUT',
            body: JSON.stringify(update),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log(result, 'todos-updated');
        if (result.status === 'success') {
            return result.data.todo;
        }
    }
    catch (e) {
        console.log(e, 'error');
    }
}


export { getTodos, deleteTodo, updateTodo, createTodo, deleteAllTodo };