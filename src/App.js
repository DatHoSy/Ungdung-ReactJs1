import { Routes, Route } from 'react-router-dom'
import HomePage from 'containers/HomePage';
import LoginPage from 'containers/LoginPage';
import NotFoundPage from 'containers/NotFoundPage';


function App() {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/home' element={<HomePage />}></Route>
            <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
    );
}

export default App;
