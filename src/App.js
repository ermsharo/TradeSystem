import logo from './logo.svg';
import './App.css';
import SheetsFileRequest from './components/fileGet'; 
import Header from './components/Header';
import Home from  './components/Home';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="App">
   {/*    <SheetsFileRequest/> */}
   <Header/>
   <Home/>
   <Footer/>

    </div>
  );
}

export default App;
