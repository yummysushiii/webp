import logo from './logo.svg';
import './App.css';
import account from './account';

function App() {
  return (
    <div className="App">
      <div>
        <h1>CGU Login</h1>
      </div>
      <div>
        <h1>User Name {account()}</h1>
      </div>
      <div>
        <h1>Password  <input type = "text"></input></h1>
      </div>
      <button>登入</button>
    </div>
);
}

export default App;
