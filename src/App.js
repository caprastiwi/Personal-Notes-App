import React, { useState, useMemo, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getUserLogged, putAccessToken } from './utils/api';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
    const [authedUser, setAuthedUser] = useState(null);
    const [initializing, setInitializing] = useState(true);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const onLoginSuccess = async ({ accessToken }) => {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        setAuthedUser(data);
    }

    const onLogout = () => {
        setAuthedUser(null);
        putAccessToken('');
    }

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    }
    
    const themeContextValue = useMemo(() => {
        return {
            theme,
            toggleTheme,
        };
    }, [theme]);

    useEffect(() => {
        if (theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    useState(() => {
        async function setUserLogged() {
          const { data } = await getUserLogged();
          setAuthedUser(data);
          setInitializing(false);
        };
    
        setUserLogged();
      }, [setAuthedUser]);
    
      if (initializing) {
        return null;
      }

        if (authedUser === null) {
            return (
                <ThemeProvider value={themeContextValue}>
                <>
                <Header />
                <main>
                    <Routes>
                        <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                </main>
                <Footer />
                </>
                </ThemeProvider>
            )
        }

        return (
            <>
            <Header logout={onLogout} name={authedUser.name} />
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