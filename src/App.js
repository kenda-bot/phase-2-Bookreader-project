import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Books from './Components/Books';
import BookDetails from './Components/BookDetails';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ReadingList from './Components/ReadingList';
import Home from './Components/Home';
import About from './Components/About';
function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Routes>
        
      <Route exact='true' path='/phase-2-bookreader-project' element={<Home />} ></Route>
        <Route exact='true' path='/home' element={<Home />} ></Route>
        <Route path ="/books" element={<Books />}/>
        <Route path = "/books/:id" element={<BookDetails />}/>
        <Route path = "/ReadingList" element={<ReadingList />}/>
        <Route path = "/about" element={<About />}/>
       
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
