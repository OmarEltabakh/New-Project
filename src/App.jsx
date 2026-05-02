import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import ScrollToHashElement from './components/ScrollToHashElement/ScrollToHashElement';
import FloatingActions from './components/FloatingActions/FloatingActions';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollToHashElement />
      <Navbar />
      <main className="flex-shrink-0">
        <AppRoutes />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
}

export default App;
