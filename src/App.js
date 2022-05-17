import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Starasthra from './components/Starasthra';





function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes >
          <Route path='/starofasthra' element={<Starasthra/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
