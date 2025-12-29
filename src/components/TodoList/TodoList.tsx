import React, { useState } from "react";

type Todo = { id: number; text: string; done: boolean };

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState("");

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input.trim(), done: false }]);
            setInput("");
        }
    }

    return (
        <>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li 
                        key={todo.id}
                        style={{ textDecoration: todo.done ? "line-through" : "none" }}
                        onClick={() => {
                            setTodos(todos.map(t => t.id === todo.id ? { ...t, done: !t.done } : t))
                        }}
                    >
                        {todo.text}
                        <button onClick={e => { e.stopPropagation(); setTodos(todos.filter(t => t.id !== todo.id)); }}>X</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;