import List from '@mui/material/List';
import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const initialTodos = [
    { id: 1, text: "walk the dog", completed: false },
    { id: 2, text: "walk the cat", completed: true },
    { id: 3, text: "walk the fish", completed: false },
    { id: 4, text: "walk the chickens", completed: false }
];

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

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
        setTodos((prevTodos) => {
            return [...prevTodos, { id: 8, text: text, completed: false }]
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