import { Route, Routes } from "react-router-dom";
import './App.css';
import Albums from './components/Albums';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Subscription from './components/Subscription';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
        <div style={{ width: '15%', height: '100%', borderRight: '1px solid #ddd' }}>
          <Navbar />
        </div>
        <div style={{ width: '85%', height: '100%', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/subscription" element={<Subscription />} />
          </Routes>
        </div>
      </div>
    </div>
    
  );
}

export default App;
