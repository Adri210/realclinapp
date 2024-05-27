import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/loginForm';
import Estagiarios from './pages/Estagiarios';
import Prontuarios from './pages/Prontuarios';
import Usuario from './pages/Usuario';
import Agenda from './pages/Agenda';



function RoutesApp() {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/estagiario" element={<Estagiarios />} />
                <Route path="/prontuarios" element={<Prontuarios />} />
                <Route path="/usuario" element={<Usuario />} />
                <Route path="/agenda" element={<Agenda />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;