import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Notice the change here
import 'foundation-sites/dist/css/foundation.min.css';
import ShopPage from './components/ShopPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/produkter" element={<ShopPage />} />
        <Route path="/produkter/:categorySlug" element={<ShopPage />} />
        <Route path="/produkter/:categorySlug/:productId" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
