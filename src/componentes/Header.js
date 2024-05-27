// src/Header.js

import React from 'react';
import '../styles/sidebar.css'; ; // Supondo que você tenha um arquivo de estilo para o cabeçalho

const Header = () => {
  return (
    <div className="bg-white mobile-header">
      <img src="./assets/imagens/logo.png" className="mobile-logo" alt="Logo" />
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
              <img src="./assets/imagens/person-fill.png" alt="Usuário" />
              Usuário
            </a>
          </li>
          <li>
            <a href="./Agenda.html">
              <img src="./assets/imagens/calendar-event-fill.png" alt="Agenda" />
              Agenda
            </a>
          </li>
          <li>
            <a href="./Prontuario.html">
              <img src="./assets/imagens/clipboard.png" alt="Prontuário" />
              Prontuário
            </a>
          </li>
          <li>
            <a href="./Estagiarios.html">
              <img src="./assets/imagens/users-solid.svg" className="estagiarios-img" alt="Estagiários" />
              Estagiários
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
