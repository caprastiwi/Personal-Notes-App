import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api';
import { LocaleConsumer } from '../contexts/LocaleContext';

function RegisterPage() {
    const navigate = useNavigate();

    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
            navigate('/');
        }
    }
    
    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <section className='register-page'>
                            <h2>{locale === 'id' ? 'Isi form untuk daftar akun' : 'Fill the form to register account'}</h2>
                            <RegisterInput register={onRegisterHandler} />
                            <p>{locale === 'id' ? 'Sudah punya akun?' : 'Already have an account?'} <Link to="/" className='link'>{locale === 'id' ? 'Masuk' : 'Login'}</Link></p>
                        </section>
                    )
                }
            }
        </LocaleConsumer>
    )
}
 
export default RegisterPage;