import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer';
import Routing from './routing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routing/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
