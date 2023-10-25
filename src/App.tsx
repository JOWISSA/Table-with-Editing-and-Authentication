import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import TablePage from './Pages/Table';
import { NotFound } from './Pages/NotFound';

import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/tabs" element={<TablePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
