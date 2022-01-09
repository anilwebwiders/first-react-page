import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Pages/include/Navbar';
import Home from './Component/Pages/Home';
import Footer from './Component/Pages/include/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Footer />
    </>
  );
}

export default App;
