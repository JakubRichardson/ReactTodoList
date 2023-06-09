import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { useState, useEffect } from 'react';
import List from '@mui/material/List';

const getStoredData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return [];
    return data;
}

export default function TodoList() {
    const [todos, setTodos] = useState(getStoredData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            });
        });
    };

    const addTodo = (text) => {
        if (text === "") return;
        setTodos((prevTodos) => {
            const newID = crypto.randomUUID();
            return [...prevTodos, { id: newID, text: text, completed: false }]
        })
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} remove={() => removeTodo(todo.id)} toggle={() => toggleTodo(todo.id)} />
            ))}
            <TodoForm add={addTodo} />
        </List>
    );
}