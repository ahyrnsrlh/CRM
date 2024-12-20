import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Overview } from './pages/Overview';
import { Sales } from './pages/Sales';
import { Marketing } from './pages/Marketing';
import { CustomerService } from './pages/CustomerService';
import { Finance } from './pages/Finance';
import { CustomerAnalytics } from './pages/CustomerAnalytics';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/customer-service" element={<CustomerService />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/analytics" element={<CustomerAnalytics />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;