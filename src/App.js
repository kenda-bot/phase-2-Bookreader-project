import './App.css';
import {Routes, Route} from 'react-router-dom';
import Books from './Components/Books';
import BookDetails from './Components/BookDetails';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ReadingList from './Components/ReadingList';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/"element={<Books />}/>
        <Route path = "/book/:id" element={<BookDetails />}/>
        <Route path = "/ReadingList" element={<ReadingList />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
