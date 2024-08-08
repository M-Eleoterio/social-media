import 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import PgLogin from '../Pages/pgLogin';

export default function RouteManager() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/login' element={<PgLogin />} />
            </Routes>
        </BrowserRouter>
    )
}