import React, { Component } from 'react';
import { Button, Input } from 'antd'
import './App.css';


function TodoItems(props) {
  const items = [...props.todoList]
  const listItems = items.map((todo, index) =>
    <li key={index}>{todo.text}</li>
  );
  return (
    <ul>{listItems}</ul>
  );  
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todoList: []
    }
  }
  onChange = e => {
    const { value } = e.target
    this.setState({
      inputValue: value
    })
  }
  addList = () => {
    const list = [...this.state.todoList]
    list.push({
      text: this.state.inputValue
    })
    this.setState({
      todoList: list
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
        <Button type="primary" onClick={this.addList}>添加</Button>
        <TodoItems todoList={this.state.todoList}></TodoItems>
      </div>
    );
  }
}

export default App;
