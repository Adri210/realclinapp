import React from 'react';
import person from '../imagens/person-fill.png';
import calendar from '../imagens/calendar-event-fill.png';
import clipboard from '../imagens/clipboard.png';
import users from '../imagens/users-solid.svg';
import logo from '../imagens/logo.png';


import '../styles/sidebar.css'; ; // Supondo que você tenha um arquivo de estilo para o cabeçalho

const Header = () => {
  return (
    <div className="bg-white mobile-header">
      <img src={logo} className="mobile-logo" alt="Logo" />
      <nav>
        <input type="checkbox" id="menu-hamburguer" />
        <label htmlFor="menu-hamburguer">
          <div className="menu">
            <span className="hamburguer"></span>
          </div>
        </label>
        <ul>
          <li>
            <a href="./Usuário.html">
              <img src={person} alt="Usuário" />
              Usuário
            </a>
          </li>
          <li>
            <a href="./Agenda.html">
              <img src={calendar} alt="Agenda" />
              Agenda
            </a>
          </li>
          <li>
            <a href="./Prontuario.html">
              <img src={clipboard} alt="Prontuário" />
              Prontuário
            </a>
          </li>
          <li>
            <a href="./Estagiarios.html">
              <img src={users} className="estagiarios-img" alt="Estagiários" />
              Estagiários
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
