import './App.css';
import { Header } from './componenets/Header';
import { Navbar } from './componenets/Navbar';
import { Main } from './componenets/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;
