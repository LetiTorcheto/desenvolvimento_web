import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './screens/HomePage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
