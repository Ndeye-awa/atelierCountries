import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './Pages/Accueil';
import Details from './Pages/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Accueil/>}/>
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
