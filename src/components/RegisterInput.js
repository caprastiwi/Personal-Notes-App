import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { register } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { LocaleConsumer } from '../contexts/LocaleContext';

function RegisterInput() {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const navigate = useNavigate()
    const onSubmitHandler = (event) => {
        event.preventDefault();
        register({ name, email, password });
        navigate('/');
    }
    
    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <form onSubmit={onSubmitHandler} className='register-input'>
                            <input
                                type='text'
                                placeholder='Nama'
                                value={name}
                                onChange={onNameChange}
                            />
                            <input
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={onEmailChange}
                            />
                            <input
                                type='password'
                                placeholder='Password'
                                autoComplete='current-password'
                                value={password}
                                onChange={onPasswordChange}
                            />
                            <button>{locale === 'id' ? 'Daftar' : 'Register'}</button>
                        </form>
                    )
                }
            }
        </LocaleConsumer>
    )
}
 
RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};
 
export default RegisterInput;