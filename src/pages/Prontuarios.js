import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './App.css'; // Supondo que você tenha um arquivo de estilo global

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col cadastro">
          <Header />
          {/* Conteúdo principal pode ser adicionado aqui */}
        </div>
      </div>
    </div>
  );
};

export default App;
