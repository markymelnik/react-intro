import Task from './Task';

const Overview = ({ tasks, removeTask, editTask }) => {

  return (
    <div className= "task-list">
      {tasks.map(task => (
        <Task 
          key={task.id}
          task={task} 
          removeTask={removeTask} 
          editTask={editTask} 
        />
      ))}
    </div>
  );
};

export default Overview;