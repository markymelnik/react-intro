import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';
import './styles.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid(),
      },
      tasks: [],
    }
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      }
    })
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid(),
      },
    })
  }

  handleRemove = (taskId) => {
    // const filteredTasks = this.state.tasks.filter(task => task.id !== taskId);
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== taskId),
    })
  }

  render() {

    const { task, tasks } = this.state;

    return (
      <div>
        <form className="task-form" onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter Task</label>
          <input 
            onChange={this.handleChange}
            value={task.text}
            type="text" 
            id="taskInput"
            autoComplete="off"
            required
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} removeTask={this.handleRemove} />
      </div>
    )
  }
}

export default App;