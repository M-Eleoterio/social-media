import './cpPost.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function CpPost() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [commentText, setCommentText] = useState("");


    async function getPost() {
        try {
            const res = await axios.get(`http://localhost:8000/api/posts/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setData(res.data);
            setLoading(false)
            console.log(data);

        } catch (error) {
            console.log(error);

        }

    }

    function handleCommentPost(e, post_id) {
        e.preventDefault();
        if (commentText.trim() == "") {
            alert("Empty comment");
        } else {
            axios.post(`http://localhost:8000/api/posts/${post_id}/comment`, {
                text: commentText
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                console.log(res.data);
                getPost();
                setCommentText("");
            }).catch(err => {
                console.log(err);

            })
        }
    }

    useEffect(() => {
        getPost();
    }, [])

    if (loading) return <h1>Loading</h1>;
    return (
        <div id="post">
            {data.post ? (
                <>
                    <div id="post-section-img">
                        <img src={data.post.imageUrl} alt="Post" id="post-img" />
                    </div>
                    <div id="post-section-info">
                        <h3 onClick={()=> navigate(`/profile/${data.post.user_id}`)} id="post-profile">{data.author}</h3>
                        <ul id="post-comments">
                            {data.comments?.map((comment) => (
                                <li className="post-comment">
                                    <p><strong>{comment.author}: </strong>{comment.text}</p>
                                </li>
                            ))}
                        </ul>
                    <form className="post-comment-input" onSubmit={(e) => handleCommentPost(e, data.post.id)}>
                        <input type="text" className="post-comment-text" value={commentText} onChange={(e) => setCommentText(e.target.value)} />
                        <button type="submit" className="post-comment-btn">Send</button>
                    </form>
                    </div>
                </>
            ) : (
                <h1>No data found</h1>
            )}
        </div>
    );
}