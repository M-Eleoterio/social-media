import './cpPosts.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CpPosts() {
    const baseURL = "http://localhost:8000/api";
    const [posts, setPosts] = useState([]);
    const [commentText, setCommentText] = useState("");
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
                setLoading(false);
            })
            .catch(err => {
                console.log(err);

            })
    }

    function handleCommentPost(e, post_id) {
        e.preventDefault();
        console.log(localStorage.getItem("token"));

        if (commentText.trim() == "") {
            alert("Empty comment");
        } else {
            axios.post(`${baseURL}/posts/${post_id}/comment`, {
                text: commentText
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                getPosts();
            }).catch(err => {
                console.log(err);

            })
        }
    }

    useEffect(() => {
        getPosts()
    }, []);

    return loading ? (
        <h1>Loading</h1>
    ) : (
        <div id="posts">
            {posts.map((post) => (
                <div className="post">
                    <h3>{post.owner}</h3>
                    <img src={post.imageUrl} alt="" className="post-img" />
                    <span id="post-caption">
                        <p className="post-caption-owner">{post.owner}:</p><p className="post-caption-text">{post.caption}</p>
                    </span>
                    <div className="post-comments">
                        <h4>Comments</h4>
                        <ul className="post-comments-section">
                            {post.comments.slice(0, 3).map(comment => (
                                <li className="post-comment"><span className="post-comment-author">{comment.author}: </span>{comment.text}</li>
                            ))}
                        </ul>
                        <form className="post-comment-input" onSubmit={(e) => handleCommentPost(e, post.id)}>
                            <input type="text" className="post-comment-text" onChange={(e) => setCommentText(e.target.value)} />
                            <button type="submit" className="post-comment-btn">Send</button>
                        </form>
                    </div>
                </div>
            ))}
        </div>
    )
}