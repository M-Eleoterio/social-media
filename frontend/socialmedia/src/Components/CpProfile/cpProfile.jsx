import { useParams } from 'react-router-dom';
import './cpProfile.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CpProfile() {
    const navigate = useNavigate();

    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([]);

    function getProfile() {
        axios.get(`http://localhost:8000/api/users/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                setUser(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    function getProfilePosts() {
        axios.get(`http://localhost:8000/api/users/${id}/posts`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                console.log(res.data);
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getProfile();
        getProfilePosts();
    }, [])

    return (
        <div id="profile-container">
            <div id="profile-top">
                <section id="profile-section-icon">
                    <img src="https://placehold.jp/400x400.png" alt="" id="profile-section-icon-img" />
                </section>
                <section id="profile-section-info">
                    <h3 className='profile-section-info-text' id="profile-section-info-name">{user.name}</h3>
                    <p className='profile-section-info-text' id="profile-section-info-email">{user.email}</p>
                    <p className='profile-section-info-text' id="profile-section-info-desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus maxime, aperiam consectetur quod ex adipisci voluptates nemo dicta laudantium, provident cumque perspiciatis odit sed, molestias blanditiis error. Repellendus, voluptatum provident.
                    </p>
                    <div id="profile-section-info-btns">
                        <button className="profile-section-info-btn">Follow</button>
                        <button className="profile-section-info-btn">Send Message</button>
                    </div>
                </section>
            </div>
            <hr />
            <div id="profile-posts">
                {posts.map(post => (
                    <div className="profile-post" onClick={() => navigate(`/post/${post.id}`)}>
                        <img src={post.imageUrl} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}