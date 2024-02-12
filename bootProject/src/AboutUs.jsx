import React, { useState, useEffect } from 'react';

const AboutUs = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData   ()  {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();

        setTodos(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!todos || !todos.length) {
    return <p>No todos found.</p>;
  }

  return (
    <div>
      <h1>Todo List:</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>
            <br />
            Completed: {todo.completed ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUs;
