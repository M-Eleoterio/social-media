import 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PgLogin from '../Pages/pgLogin';
import PgHome from '../Pages/PgHome/pgHome';
import PgProfile from '../Pages/profile/pgProfile';
import PgPost from '../Pages/PgPost/pgPost';
import PgRegister from '../Pages/pgRegister/pgRegister';

export default function RouteManager() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PgHome />} />
                <Route path='/login' element={<PgLogin />} />
                <Route path='/profile/:id' element={<PgProfile />} />
                <Route path='/post/:id' element={<PgPost />} />
                <Route path='/register' element={<PgRegister />} />
            </Routes>
        </BrowserRouter>
    )
}