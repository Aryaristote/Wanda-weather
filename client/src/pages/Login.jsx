// AuthForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistration, setIsRegistration] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('http://localhost:3011/login', { email, password });
        console.log(response.data.user.email);
        const userName = response.data.user.email
        const setCookie = (name, value, days) => {
          const date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Set expiration time
          const expires = 'expires=' + date.toUTCString();
          document.cookie = name + '=' + encodeURIComponent(userName) + ';' + expires + ';path=/';
        }
        setCookie('User', userName, 30);
        navigate('/');
        } catch (error) {
        console.error('Authentication failed:', error);
        }
    };

    return (
        <div className="wrapper login">
                <div class="inner">
                    <form onSubmit={handleSubmit}>
                        <h3>New Account | Login</h3>
                        <div class="form-holder">
                            <span>Email</span><br />
                            <input class="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
                        </div>
                        <div class="form-holder">
                            <span>Password</span><br />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required class="form-control" placeholder="Password" />
                        </div>
                        <button type="submit">{isRegistration ? 'Register' : 'Login'}</button>
                    <p onClick={() => setIsRegistration(!isRegistration)}>
                        {isRegistration ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
                    </p>
                    </form>
                </div>
                
        </div>
    );
};

export default Login;
