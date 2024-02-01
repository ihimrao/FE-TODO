import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState('');
    const [user, setUser] = useState('John Doe');

    const addTodo = () => {
        if (todoInput.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: todoInput, completed: false }]);
            setTodoInput('');
        }
    };

    const toggleTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
    let location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";
    const handleLogout = () => {
        navigate(from, { replace: true });
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <header style={{ backgroundColor: '#4CAF50', padding: '15px', borderRadius: '8px', color: 'white' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ margin: '0' }}>Todo App</h1>
                        {/* <p style={{ fontSize: '14px', margin: '0' }}>Welcome, {user}!</p> */}
                    </div>
                    <button
                        onClick={handleLogout}
                        style={{
                            backgroundColor: '#f44336',
                            color: 'white',
                            padding: '10px',
                            borderRadius: '4px',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Logout
                    </button>
                </div>
            </header>
            <div style={{ flex: '1', maxWidth: '800px', margin: 'auto', padding: '20px' }}>
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                    <input
                        type="text"
                        value={todoInput}
                        onChange={(e) => setTodoInput(e.target.value)}
                        placeholder="Add a new todo"
                        style={{ flex: '1', padding: '8px', marginRight: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <button
                        onClick={addTodo}
                        style={{
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            padding: '8px',
                            borderRadius: '4px',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Add Todo
                    </button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: "center", justifyContent: "center" }}>
                    {todos.map((todo) => (
                        <div
                            key={todo.id}
                            style={{
                                flex: '1',
                                minWidth: '250px',
                                maxWidth: '300px',
                                marginBottom: '20px',
                                padding: '15px',
                                backgroundColor: '#f9f9f9',
                                borderRadius: '12px',
                                boxSizing: 'border-box',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo.id)}
                                    style={{ marginRight: '12px' }}
                                />
                                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flex: '1' }}>
                                    {todo.text}
                                </span>
                            </div>
                            <button
                                onClick={() => removeTodo(todo.id)}
                                style={{
                                    backgroundColor: '#f44336',
                                    color: 'white',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <footer style={{ marginTop: 'auto', textAlign: 'center', color: '#666', padding: '15px', backgroundColor: '#f0f0f0' }}>
                <p>&copy; 2024 Todo App.</p>
            </footer>
        </div>
    );
};

export default TodoApp;
