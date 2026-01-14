import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MarketPlaceOnboarding from './MarketPlaceOnboarding';
import PlatformOnboarding from './PlatformOnboarding';
import Components from './Components';
// import './output.css';
import Layout from './components/Layout';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/components" element={<Components />} />
                    <Route path="/" element={<App />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    </React.StrictMode>
);
