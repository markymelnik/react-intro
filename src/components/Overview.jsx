import React from 'react';

const Overview = (props) => {

  const { tasks } = props;

  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return <li key={task.id}>{task.text}</li>;
      })}
    </ul>
  )
}

export default Overview;