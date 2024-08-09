import { useState } from 'react';
import './cpRecUsers.css';
import axios from 'axios';

export default function CpRecUsers () {
    const baseURL = "http://localhost:8000/api";
    const [users, setUsers] = useState([]);

    axios
        .get(`${baseURL}/users`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            setUsers(res.data);
        })

    return (
        <div id="rec-users">
            <h3>Talvez você conheça</h3>
            {users.slice(0, 4).map((user) => (
                <div className="user">
                    <h4 className="user-name">{user.name}</h4>
                    <a href={`/${user.id}`} id="user-goto-btn">Ver perfil</a>
                </div>
            ))}
        </div>
    )
}