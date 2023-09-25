import './App.css';
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import Greet from './components/Greet';
import Employee from './components/Employee';
import Customer from './components/Customer';
import Calculator from './components/Calculator';


function App() {
  return (
    <div className="App">
      <Hello/>
      <Welcome/>
      <Greet/>
      <Employee/>
      <Customer/>
      <Calculator/>
    </div>
  );
}

export default App;
