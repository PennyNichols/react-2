import './App.css';
import Counter from './components/Counter/Counter';
import { Main } from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Counter/>
      <Main/>
    </div>
  );
}

export default App;
