import './cpPost.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CpPost() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        getPost();
    }, [])

    if (loading) return <h1>Loading</h1>;
    return (
        <div id="post">
            {/* {data.post ? (
                <>
                    <img src={data.post.imageUrl} alt="Post" id="post-img" />
                    <h3 id="post-profile">{data.author}</h3>
                    <ul id="post-comments">
                        {data.comments?.map((comment) => (
                            <li key={comment.id} className="post-comment">
                                <strong>{comment.author}</strong>
                                {comment.text}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <h1>No data found</h1>
            )} */}
        </div>
    );
}