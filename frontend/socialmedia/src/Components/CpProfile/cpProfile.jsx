import './cpProfile.css';
import axios from 'axios';

export default function CpProfile() {



    return (
        <div id="profile-container">
            <div id="profile-top">
                <section id="profile-section-icon">
                </section>
                <section id="profile-section-info">
                    <span id="profile-section-info-name"></span>
                    <span id="profile-section-info-nick"></span>
                    <span id="profile-section-info-desc"></span>
                </section>
            </div>
            <div id="porfile-posts"></div>
        </div>
    )
}