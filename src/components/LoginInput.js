import React from 'react';
import PropTypes from 'prop-types';
import useInput from "../hooks/useInput";
import { LocaleConsumer } from '../contexts/LocaleContext';

function LoginInput({ login }) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const onSubmitHandler = e => {
        e.preventDefault();
        login({ email, password });
    }
    
    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <form onSubmit={onSubmitHandler} className='login-input'>
                            <input
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={onEmailChange}
                            />
                            <input
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={onPasswordChange}
                            />
                            <button>{locale === 'id' ? 'Masuk' : 'Login'}</button>
                        </form>
                    )
                }
            }
        </LocaleConsumer>
    );

}
 
LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}
 
export default LoginInput;