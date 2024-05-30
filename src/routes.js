import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from './pages/loginForm';
import Estagiarios from './pages/Estagiarios';
import Prontuario from './pages/Prontuarios';
import Usuario from './pages/Usuario';
import Agenda from './pages/Agenda';



function RoutesApp() {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/estagiario" element={<Estagiarios />} />
                <Route path="/prontuarios" element={<Prontuario />} />
                <Route path="/usuario" element={<Usuario />} />
                <Route path="/agenda" element={<Agenda />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;