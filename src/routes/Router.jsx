import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import Test from '../pages/Test';
import Result from '../pages/Result';
import Header from '../components/Header';
import AuthenticatedRoute from './AuthenticatedRoute';
import NonAuthenticatedRoute from './NonAuthenticatedRoute';

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* 로그인 여부에 상관없이 접속 가능 */}
                <Route path="/" element={<Home />} />

                {/* 로그인이 되어있지 않은 경우에만 접속 가능 */}
                <Route element={<NonAuthenticatedRoute />}>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Route>

                {/* 로그인이 되어있는 경우에만 접속 가능 */}
                <Route element={<AuthenticatedRoute />}>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/result" element={<Result />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
