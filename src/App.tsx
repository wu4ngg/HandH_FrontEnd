
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Navbar from './components/layout/NavBar'
import AppRoutes from './configs/AppRoutes'

const App = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen w-full'>
        <Navbar></Navbar>
        <main className='flex-grow mt-4'>
          <AppRoutes></AppRoutes>
        </main>
      </div>
    </Router>
  );
};

export default App
