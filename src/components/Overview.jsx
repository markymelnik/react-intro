import React from 'react';

const Overview = (props) => {

  const { tasks, removeTask } = props;

  return (
    <ul className="task-list">
      {
      tasks.map((task) => {
        return (
          <div key={task.id} className="list-item">
            <button type="button" onClick={() => removeTask(task.id)}>X</button>
            <li >{task.text}</li>
          </div>
        )
      })
      }
    </ul>
  )
}

export default Overview;