
import '../Styles/App.css';

import Navbar from './Navbar'
import Sildebody from './Sildebody'
import Gallery from './Gallery'

import Footer from './Footer'
//import { BrowserRouter as Routes, Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
   
  
      <Navbar />
      <Sildebody />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
