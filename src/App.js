import React, { Component } from 'react';
import { Button, Input, List } from 'antd'
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
    return (
      <div className="App">
        <Input
          className="inputTodo"
          placeholder="请添加一条todo"
          allowClear
          onChange={this.onChange} />
        <Button type="primary" onClick={this.addList}>添加</Button>
        <List
          size="small"
          className="todo-list"
          bordered
          dataSource={this.state.todoList}
          renderItem={item => <List.Item>{item.text}</List.Item>}
        />
      </div>
    );
  }
}

export default App;
