import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';

const todoStart = [
  {
    id:0,
    title: "Hei",
    content: "Hei Dette er en nettside"
  }
]

function App() {
  return (
    <>
    <Navbar username="amanig"/>
    <Todos todoStart={todoStart}/>
    </>
  );
}

export default App;
