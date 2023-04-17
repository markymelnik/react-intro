import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log('Button has been clicked!');
  }

  render() {
    
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn} />
        <Counter title="Counter" />
      </div>
    );
  }
}

export default App;