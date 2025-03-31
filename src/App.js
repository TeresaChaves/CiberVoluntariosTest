import { Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
          <NavBar />
      <AppRoutes />
     
    </div>
  );
}

export default App;
