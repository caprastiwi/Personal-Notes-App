import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <>
        <Header />
        <main>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/archive' element={<ArchivePage />} />
                <Route path='/notes/new' element={<AddPage />} />
                <Route path='/notes/:id' element={<DetailPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </main>
        <Footer />
        </>
    );
}

export default App;