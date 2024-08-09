import { useState } from 'react';
import './pgHome.css';
import CpPosts from '../../Components/cpPosts/cpPosts';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PgHome() {
    const navigate = useNavigate();

    const baseURL = "http://localhost:8000/api";
    const [auth, setAuth] = useState("");


    /* VERIFICAR SE USUARIO AUTENTICADO */
    axios
        .post(`${baseURL}/checkAuth`, {
            token: localStorage.getItem('token')
        }, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            setAuth(res.data);
            console.log(auth);
        })
        .catch(err => {
            console.log(err); //debug log

        })

    if (auth === "guest")
        return navigate('/login');
    else if (auth === "auth")
        return (

            <div id="home">
                <h1>Home</h1>
                <CpPosts />
            </div>
        )
}