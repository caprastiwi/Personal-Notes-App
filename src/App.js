import React from 'react';
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
import { LocaleProvider } from './contexts/LocaleContext';
import { ThemeProvider } from './contexts/ThemeContext';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            authedUser: null,
            initializing: true,
            localeContext: {
                locale: localStorage.getItem('locale') || 'id',
                toggleLocale: () => {
                    this.setState((prevState) => {
                        const newLocale = prevState.localeContext.locale === 'id' ? 'en' : 'id';
                        localStorage.setItem('locale', newLocale);
                        return {
                            localeContext: {
                                ...prevState.localeContext,
                                locale: newLocale
                            }
                        }
                    });
                }
            },
            themeContext: {
                theme: localStorage.getItem('theme') || 'light',
                toggleTheme: () => {
                    this.setState((prevState) => {
                        const newTheme = prevState.themeContext.theme === 'light' ? 'dark' : 'light';
                        localStorage.setItem('theme', newTheme);
                        return {
                            themeContext: {
                                ...prevState.themeContext,
                                theme: newTheme
                            }
                        }
                    });
                }
            }
        };

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    async componentDidMount() {
        const { data } = await getUserLogged();
    
        this.setState(() => {
            return {
                authedUser: data,
                initializing: false,
            };
        });

        document.documentElement.setAttribute('data-theme', this.state.themeContext.theme);
    }

    async onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        
        this.setState(() => {
            return {
                authedUser: data,
            };
        });
    }

    onLogout() {
        this.setState(() => {
            return {
                authedUser: null
            }
        });
        
        putAccessToken('');
    }

    render() {
        if (this.state.initializing) {
            return null;
        }

        if (this.state.authedUser === null) {
            return (
                <LocaleProvider value={this.state.localeContext}>
                <ThemeProvider value={this.state.themeContext}>
                <div className='notes-app'>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                            <Route path="/register" element={<RegisterPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </ThemeProvider>

                </LocaleProvider>
            )
        }

        return (
            <LocaleProvider value={this.state.localeContext}>
                <ThemeProvider value={this.state.themeContext}>
            <div className='notes-app'>
                <Header logout={this.onLogout} name={this.state.authedUser.name} />
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
            </div>
            </ThemeProvider>
            </LocaleProvider>
        );
    }
}

export default App;