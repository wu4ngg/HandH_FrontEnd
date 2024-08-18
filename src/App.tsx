
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Navbar from './components/layout/NavBar'
import AppRoutes from './configs/AppRoutes'

const App = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen w-screen'>
        <Navbar></Navbar>
        <main className='flex-grow flex mt-12'>
          <AppRoutes></AppRoutes>
        </main>
      </div>
    </Router>
  );
};

export default App
