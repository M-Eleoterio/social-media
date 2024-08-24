import axios from 'axios';
import './cpSidebar.css';
import { useNavigate } from 'react-router-dom';

export default function CpSidebar() {
    const navigate = useNavigate();

    function handleAccountLink() {
        axios.post('http://localhost:8000/api/checkAuth/', {
            token: localStorage.getItem('token')
        }, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            navigate(`/profile/${res.data.id}`)
        })
    }

    return (
        <nav id="sidebar">
            <h1 id="sidebar-logo">SocialMedia</h1>
            <ul id="sidebar-items">
                <li className="sidebar-item"><a href="#" onClick={() => navigate('/')} className="sidebar-item-link">Página Inicial</a></li>
                <li className="sidebar-item"><a href="#" className="sidebar-item-link">Pesquisa</a></li>
                <li className="sidebar-item"><a href="#" className="sidebar-item-link">Mensagens</a></li>
                <li className="sidebar-item" onClick={() => { document.getElementById('create-modal-backshadow').style.display = 'flex' }}><a href="#" className="sidebar-item-link">Criar</a></li>
                <li className="sidebar-item sidebar-perfil"><a href="#" className="sidebar-item-link" onClick={handleAccountLink}>Perfil</a></li>
            </ul>
        </nav>
    )
}
