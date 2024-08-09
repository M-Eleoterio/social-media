import './cpPosts.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CpPosts() {
    const baseURL = "http://localhost:8000/api";
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    /* PEGAR POSTS */
    async function getPosts() {
        await axios
            .get(`${baseURL}/posts`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                setPosts(res.data)
                console.log(posts);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);

            })
    }

    useEffect(() => {
        getPosts()
    }, []);

    return loading ? (
        <h1>Loading</h1>
    ) : (
        <div id="posts">
            {posts.map(post => (
                <div className="post">
                    <img src={post.imageUrl} alt="" className="post-img" />
                    <p id="post-caption">{post.caption}</p>
                </div>
            ))}
        </div>
    )
}