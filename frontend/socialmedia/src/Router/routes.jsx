import 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PgLogin from '../Pages/pgLogin';
import PgHome from '../Pages/PgHome/pgHome';

export default function RouteManager() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PgHome />} />
                <Route path='/login' element={<PgLogin />} />
            </Routes>
        </BrowserRouter>
    )
}