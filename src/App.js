import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './Components/Detail';
import Home from './Components/Home';

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
