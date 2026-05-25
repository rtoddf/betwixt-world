import { Routes, Route } from 'react-router';
import Home from './Pages/Home';
import Hood from './Pages/Hood';
import Hoods from './Pages/Hoods';
import Resident from './Pages/Resident';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hoods" element={<Hoods />} />
      <Route path="/:slug" element={<Hood />} />
      <Route path="/:hood/:slug" element={<Resident />} />
    </Routes>
  );
}

export default App;
