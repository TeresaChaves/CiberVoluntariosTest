import './App.css';
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
          <NavBar />
      <AppRoutes />
      <Footer />
     
    </div>
  );
}

export default App;
