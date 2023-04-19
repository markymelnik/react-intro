import { useState } from 'react';

const Task = ({ task, index, removeTask, editTask }) => {

  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setEditing(true);
  }

  const handleSave = () => {
    editTask(task.id, newText);
    setEditing(false);
  }

  const handleChange = (e) => {
    setNewText(e.target.value);
  }

  if (editing) {
    return (
      <div className='task-item'>
        <input type='text' value={newText} onChange={handleChange} />
        <button onClick={handleSave}>Save</button>
      </div>
    )
  }
  else {
    return (
      <div className='task-item'>
        <span>{index}. {task.text}</span>
        <div className='task-btns'>
          <button className='edit-btn' onClick={handleEdit}>Edit</button>
          <button onClick={() => removeTask(task.id)}>Remove</button>
        </div>
      </div>
    )
  }
};

export default Task;