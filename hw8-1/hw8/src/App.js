import logo from './logo.svg';
import './App.css';
import account from './account';
import SignInSide from './SignInSide';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <div>
        {SignUp()}
      </div>
    </div>
);
}

export default App;
