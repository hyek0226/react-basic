import { useState } from 'react';

function TodoList() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTodoList((currList) => [todo, ...currList]);
    setTodo('');
  };
  return (
    <div className="App">
      <h1>To Do List!!!</h1>
      <h3>total : {todoList.length}</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={todo}
          onChange={onChange}
          placeholder="What do you want to be done"
        />
        <button>Add</button>
      </form>
      <hr />
      <ul>
        {todoList.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
