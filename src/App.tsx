import { Routes, Route } from 'react-router';
import Home from './Pages/Home';
import Hoods from './Pages/Hoods';
import Hood from './Pages/Hood';
import Residents from './Pages/Residents';
import Resident from './Pages/Resident';
import About from './Pages/About';
import SayHello from './Pages/SayHello';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hoods" element={<Hoods />} />
      <Route path="/:slug" element={<Hood />} />
      <Route path="/residents" element={<Residents />} />
      <Route path="/:hood/:slug" element={<Resident />} />
      <Route path="/about" element={<About />} />
      <Route path="/say-hello" element={<SayHello />} />
    </Routes>
  );
}

export default App;
