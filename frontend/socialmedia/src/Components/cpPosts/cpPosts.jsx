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
                console.log(res.data);
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
            {posts.map((post, post_id) => (
                <div className="post">
                    <h3>{post.owner}</h3>
                    <img src={post.imageUrl} alt="" className="post-img" />
                    <span id="post-caption">
                        <p className="post-caption-owner">{post.owner}:</p><p className="post-caption-text">{post.caption}</p>
                    </span>
                    <div className="post-comments">
                        <h4>Comments</h4>
                        <ul class="post-comments-section">
                            {post.comments.map(comment => (
                                <li class="post-comment"><span class="post-comment-author">{comment.author}: </span>{comment.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}