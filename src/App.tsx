import { Routes, Route } from 'react-router';
import Home from './Home';
import Hood from './Hood';
import CharacterDetails from './CharacterDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hoods/:slug" element={<Hood />} />
      <Route path="/characters/:slug" element={<CharacterDetails />} />
    </Routes>
  );
}

export default App;
