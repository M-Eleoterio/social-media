import './CpLoginForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CpLoginForm() {

        const navigate = useNavigate();
    function handleLogin() {
        const baseURL = 'http://localhost:8000/api';

        const email = document.getElementById("login-form-input-email").value;
        const password = document.getElementById("login-form-input-password").value;

        axios
            .post(`${baseURL}/login`, {
                email: email,
                password: password,
            })
            .then(res => {
                localStorage.setItem('token', res.data.token);
                console.log(localStorage.getItem('token'));
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    
    return (
        <div id="login-form">
            <h1 id="login-form-title">SOCIAL MEDIA</h1>
            <div className='login-form-container' id="login-form-container-email">
                <input className='login-form-input' type="email" id="login-form-input-email" placeholder='Email' />
            </div>

            <div className='login-form-container' id="login-form-container-password">
                <input className='login-form-input' type="password" id="login-form-input-password" placeholder='Password' />
            </div>

            <button className="btn" id="login-form-input-btn" onClick={handleLogin}>Login</button>

            <center>Or</center>

            <p>Don't have an account? <a href="/register" id="login-form-register-link">Register</a></p>
        </div>
    )
}