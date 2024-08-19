import './pgPost.css';
import axios from 'axios';
import CpSidebar from '../../Components/cpSidebar/cpSidebar';
import CpPost from '../../Components/cpPost/cpPost';

export default function PgPost() {
    return (
        <div id="post-page">
            <CpSidebar />
            <CpPost />
        </div>
    )
}