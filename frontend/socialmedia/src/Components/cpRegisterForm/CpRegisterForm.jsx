import './CpRegisterForm.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function CpRegisterForm() {
    const navigate = useNavigate();
    function handleRegister() {
        const baseURL = 'http://localhost:8000/api';

        const name = document.getElementById("register-form-input-name").value;
        const email = document.getElementById("register-form-input-email").value;
        const password = document.getElementById("register-form-input-password").value;
        const confirm_password = document.getElementById("register-form-input-confirm-password").value;
        const error_field = document.getElementById("register-form-error")


        if (password !== confirm_password) {
            error_field.style.display = "block";
            error_field.innerText = "Error! Passwords not matching.";
        } else {
            if (String(name).length < 3) {
                error_field.style.display = "block";
                error_field.innerText = "Name need to have at least 3 letters.";
            } else {
                axios
                    .post(`${baseURL}/register`, {
                        name: name,
                        email: email,
                        password: password,
                    })
                    .then(res => {
                        navigate('/login');
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        }
    }

    return (
        <div id="register-form">
            <h2 id="register-form-title">Register</h2>
            <div className='register-form-container' id="register-form-container-name">
                <input className='register-form-input' type="text" id="register-form-input-name" placeholder='Name' required/>
            </div>

            <div className='register-form-container' id="register-form-container-email">
                <input className='register-form-input' type="email" id="register-form-input-email" placeholder='Email' required/>
            </div>

            <div className='register-form-container' id="register-form-container-password">
                <input className='register-form-input' type="password" id="register-form-input-password" placeholder='Password' required/>
            </div>

            <div className='register-form-container' id="register-form-container-confirm-password">
                <input className='register-form-input' type="password" id="register-form-input-confirm-password" placeholder='Confirm password' required/>
            </div>

            <button className="btn" id="register-form-input-btn" onClick={handleRegister}>Register</button>
            <div id="register-form-error">Erro</div>

            <center>Or</center>

            <p>Already have an account? <a href="/login" id="register-form-register-link">Login</a></p>
        </div>
    )
}