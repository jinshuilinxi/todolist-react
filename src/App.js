import React, { Component } from 'react';
import { Button, Input } from 'antd'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todoList: []
    }
  }
  onChange = e => {
    this.setState({
      inputValue: e
    })
  }
  
  render() {
    // const { value } = this.props
    return (
      <div className="App">
        <Input
          className="inputTodo"
          placeholder="请添加一条todo"
          allowClear
          onChange={this.onChange} />
        <Button type="primary">添加</Button>
      </div>
    );
  }
}

export default App;
