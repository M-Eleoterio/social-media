import './cpPost.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CpPost() {
    const { id } = useParams();
    const [post, setPost] = useState();

    function getPost() {
        axios.get(`http://localhost:8000/api/posts/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                setPost(res.data)
                console.log(post);
                
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(()=>{
        getPost();
    }, [])

    return (
        <div id="post"></div>
    );
}