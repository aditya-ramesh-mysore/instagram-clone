import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage';
import PageLayout from './layouts/PageLayout';

function App() {
    return (
        <BrowserRouter>
            <PageLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/auth" element={<AuthPage/>} />
                    <Route path='*' element={<Navigate to="/"/>} />
                </Routes>
            </PageLayout>
        </BrowserRouter>
    )
}

export default App;
