import React, { useState } from 'react';
import Sidebar from '../componentes/sidebar.js';
import Header from '../componentes/Header.js';
import '../styles/usuario.css'; 
import perfil from '../imagens/perfil.png';

const Usuario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    dataNascimento: '',
    celular: '',
    funcao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col cadastro">
          <Header />
          <div className="cadastro-dois">
            <div>
              <h3 id="titulo-dois">Editar Perfil de funcionário</h3>
              <div className="img-perfil">
                  <img src={perfil} alt="Foto de Perfil" />
                <h4 className="m-0 p-2">Foto de Perfil</h4>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <li className="lista-form col-md-6 col-sm-12">
                  <span>Nome</span>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                  />
                </li>

                <li className="lista-form col-md-6 col-sm-12">
                  <span>Sobrenome</span>
                  <input
                    type="text"
                    name="sobrenome"
                    value={formData.sobrenome}
                    onChange={handleChange}
                  />
                </li>

                <li className="lista-form col-md-6 col-sm-12">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </li>

                <li className="lista-form col-md-6 col-sm-12">
                  <span>Data de nascimento</span>
                  <input
                    type="date"
                    name="dataNascimento"
                    value={formData.dataNascimento}
                    onChange={handleChange}
                  />
                </li>

                <li className="lista-form col-md-6 col-sm-12">
                  <span>Celular</span>
                  <input
                    type="text"
                    name="celular"
                    value={formData.celular}
                    onChange={handleChange}
                  />
                </li>

                <li className="lista-form col-md-6 col-sm-12">
                  <span>Função</span>
                  <input
                    type="text"
                    name="funcao"
                    value={formData.funcao}
                    onChange={handleChange}
                  />
                </li>
              </div>

              <button id="botao-salvar" type="submit">Salvar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuario;
