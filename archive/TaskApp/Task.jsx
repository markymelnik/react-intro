import { useState } from 'react';

const Task = ({ task, index, editTask, removeTask }) => {

  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setEditing(true);
  }

  const handleChange = (e) => {
    setNewText(e.target.value);
  }

  const handleSave = () => {
    editTask(task.id, newText);
    setEditing(false);
  }

  return (
    <div className='task-item'>
    {editing ? (
      <>
        <input type='text' value={newText} onChange={handleChange} />
        <button onClick={handleSave}>Save</button>
      </>
    ) : (
      <>
        <span>{index}. {task.text}</span>
        <div className='task-btns'>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => removeTask(task.id)}>Remove</button>
        </div>
      </>
    )}
    </div>
  )
}

export default Task;``