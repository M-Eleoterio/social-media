import './cpSidebar.css';
import { useNavigate } from 'react-router-dom';

export default function CpSidebar() {
    const navigate = useNavigate();

    return (
        <nav id="sidebar">
            <h1 id="sidebar-logo">SocialMedia</h1>
            <ul id="sidebar-items">
                <li className="sidebar-item"><a href="#" onClick={()=>navigate('/')} className="sidebar-item-link">Página Inicial</a></li>
                <li className="sidebar-item"><a href="#" className="sidebar-item-link">Pesquisa</a></li>
                <li className="sidebar-item"><a href="#" className="sidebar-item-link">Mensagens</a></li>
                <li className="sidebar-item" onClick={() => { document.getElementById('create-modal-backshadow').style.display = 'flex' }}><a href="#" className="sidebar-item-link">Criar</a></li>
                <li className="sidebar-item sidebar-perfil"><a href="" className="sidebar-item-link">Perfil</a></li>
            </ul>
        </nav>
    )
}
