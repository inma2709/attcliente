import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Tema01 from './pages/Tema01/Tema01';
import Tema02 from './pages/Tema02/Tema02';
import Tema03 from './pages/Tema03/Tema03';
import Tema04 from './pages/Tema04/Tema04';
import Tema05 from './pages/Tema05/Tema05';
import Tema06 from './pages/Tema06/Tema06';
import Tema07 from './pages/Tema07/Tema07';
import Tema08 from './pages/Tema08/Tema08';
import Tema09 from './pages/Tema09/Tema09';
import Tema10 from './pages/Tema10/Tema10';
import Tema11 from './pages/Tema11/Tema11';
import Tema12 from './pages/Tema12/Tema12';
import Tema13 from './pages/Tema13/Tema13';
import Tema14 from './pages/Tema14/Tema14';
import Tema15 from './pages/Tema15/Tema15';
import Tema16 from './pages/Tema16/Tema16';
import Tema00 from './pages/Tema00/Tema00';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tema01" element={<Tema01 />} />
          <Route path="/tema02" element={<Tema02 />} />
          <Route path="/tema03" element={<Tema03 />} />
          <Route path="/tema04" element={<Tema04 />} />
          <Route path="/tema05" element={<Tema05 />} />
          <Route path="/tema06" element={<Tema06 />} />
          <Route path="/tema07" element={<Tema07 />} />
          <Route path="/tema08" element={<Tema08 />} />
          <Route path="/tema09" element={<Tema09 />} />
          <Route path="/tema10" element={<Tema10 />} />
          <Route path="/tema11" element={<Tema11 />} />
          <Route path="/tema12" element={<Tema12 />} />
          <Route path="/tema13" element={<Tema13 />} />
          <Route path="/tema14" element={<Tema14 />} />
          <Route path="/tema15" element={<Tema15 />} />
          <Route path="/tema16" element={<Tema16 />} />
          <Route path="/tema00" element={<Tema00 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
