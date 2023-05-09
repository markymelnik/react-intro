import React, { useState } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

function App() {

  const [task, setTask] = useState({ text: '', id: uniqid() });
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask({ ...task, text: e.target.value });
  }

  const onSubmitTask = (e) => {
    e.preventDefault();
    setTasks(tasks.concat(task));
    setTask({ text: '', id: uniqid() });
  }

  const handleRemove = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  const handleEdit = (taskId, newText) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, text: newText } : task));
  }

  return (
    <>
      <div className='header'>Tasks</div>
      <div className='task-container'>
        <form className='task-form' onSubmit={onSubmitTask}>
          <label htmlFor='taskInput'>Enter Task</label>
          <input
          onChange={handleChange}
          value={task.text}
          type='text'
          id='taskInput'
          autoComplete='off'
          required
          />
          <button type='submit'>Add Task</button>
        </form>
        <Overview tasks={tasks} removeTask={handleRemove} editTask={handleEdit} />
      </div>
    </>
  )
}

export default App;