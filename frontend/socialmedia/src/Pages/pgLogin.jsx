import './pgLogin.css';
import CpLoginForm from '../Components/Login Form/CpLoginForm';
export default function PgLogin() {
    return (
        <div id='login-page'>
            <div id="login-page-container">
                <section id="login-page-section-image">
                    <img src="https://placehold.jp/350x500.png" alt="" id="login-page-image" />
                </section>
                <section id="login-page-section-form">
                    <CpLoginForm />
                </section>
            </div>
        </div>
    )
}