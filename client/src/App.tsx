
import { BrowserRouter as Router } from 'react-router-dom';
import { CoHosts } from './components/CoHosts';
import { Navbar } from './components/Navbar';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <CoHosts />
      </div>
    </Router>
  );
}

export default App;
