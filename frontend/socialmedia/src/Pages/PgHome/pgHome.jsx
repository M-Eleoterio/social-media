import { useState } from 'react';
import './pgHome.css';
import CpPosts from '../../Components/cpPosts/cpPosts';
import CpSidebar from '../../Components/cpSidebar/cpSidebar';
import CpRecUsers from '../../Components/cpRecUsers/cpRecUsers';
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
        })
        .catch(err => {
            console.log(err); //debug log

        })

    if (auth === "guest")
        return navigate('/login');
    else if (auth === "auth")
        return (

            <div id="home">
                <CpSidebar />
                <CpPosts />
                <CpRecUsers />
            </div>
        )
}