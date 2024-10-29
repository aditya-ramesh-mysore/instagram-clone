import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {BrowserRouter, Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage';
import PageLayout from './layouts/PageLayout';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase/firebase';
import { useSelector } from 'react-redux';

function App() {
    const user = useSelector((state) => state.auth.user)

    return (
        <PageLayout>
            <Routes>
                <Route path="/auth" element={!user ? < AuthPage /> : <Navigate to="/"/>}/>
                <Route path="/" element={user ? < HomePage /> : <Navigate to="/auth" />}/>
                <Route path="/profile" element={user ? < ProfilePage /> : <Navigate to="/auth"/>}/>
                <Route path='*' element={user ? < Navigate to = "/" /> : <Navigate to="/auth"/>}/>
            </Routes>
        </PageLayout>
    )
}

export default App;
