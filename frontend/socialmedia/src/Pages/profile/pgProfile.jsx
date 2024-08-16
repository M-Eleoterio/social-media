import './pgProfile.css';
import CpSidebar from '../../Components/cpSidebar/cpSidebar';
import CpProfile from '../../Components/CpProfile/cpProfile';

export default function PgProfile() {
    return (
        <div id="profile">
            <CpSidebar />
            <CpProfile />
        </div>
    )
}