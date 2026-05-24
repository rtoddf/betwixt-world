import { Routes, Route } from 'react-router';
import Home from './Home';
import Hood from './Hood';
import Hoods from './Hoods';
import Resident from './Resident';

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
