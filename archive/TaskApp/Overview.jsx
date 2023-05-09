import Task from './Task';

const Overview = ({ tasks, editTask, removeTask }) => {

  return (
  <div className='task-list'>
      {tasks.map((task, index) => (
        <Task 
          key={task.id}
          task={task}
          index={index + 1}
          removeTask={removeTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default Overview;