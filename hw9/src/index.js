import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";


class NameForm extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      value: '', 
      itemList: [], 
    }; 
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleRemove = this.handleRemove.bind(this); 
  } 
  
  handleChange(event) { 
    this.setState({value: event.target.value}); 
  } 
  handleSubmit(event) { 
    this.state.itemList.push(this.state.value); 
    this.setState({value: '', itemList: this.state.itemList,}); 
    event.preventDefault(); 
  } 
  handleRemove(event) {
    // this.state.itemList.pop(this.state.value);
    
    this.state.itemList.splice(event, 1);
    this.setState({value: '', itemList: this.state.itemList,});
    event.preventDefault(); 
  }
  render() { 
    return ( 
      <div> 
      <form onSubmit={this.handleSubmit}> 
        <label> 
          Name: 
          <input type="text" value={this.state.value} onChange={this.handleChange} /> 
        </label> 
        <input type="submit" value="Submit" /> 
      </form> 
        <ul style={{ textAlign: 'left' }}> 
          {this.state.itemList.map((item, index) => <li key={`item_${index}`}>{item}<button onClick={() => this.handleRemove(index)}>X</button></li>)} 
        </ul> 
      </div> 
    ); 
  } 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NameForm />,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
