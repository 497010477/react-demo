import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './LikeButton';
import CommentApp from './CommentApp';

class App extends Component {
  constructor(){
    super();
    this.state= {
      condionRender: true,
      listRender: [
        {
          text: "列表元素1",
          value: "node1",
          key: 1
        },
        {
          text: "列表元素2",
          value: "node2",
          key: 2
        },
      ],
      inputValue: '',
      isLiked: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }
  handleChange(event){
    this.setState({
      inputValue: event.target.value
    });
  }
  handleSubmit(event){
    alert("Submit Name: " + this.state.inputValue);
    event.preventDefault();
  }
  handleBtnClick(){
    this.setState({
      isLiked: !this.state.isLiked
    });
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        {this.state.condionRender?<p>真</p>:<p>假</p>}
        <ul>
        {this.state.listRender.map(
          listnode=> <li key= {listnode.key}>{listnode.text}</li>
        )}
        </ul>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <LikeButton isLiked={this.state.isLiked} buttonClick={this.handleBtnClick} />
      <CommentApp />
      </div>
    );
  }
}

export default App;
