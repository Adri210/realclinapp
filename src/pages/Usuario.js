import Sidebar from '../componentes/sidebar.js';
import Header from '../componentes/Header.js';
import '../styles/usuario.css'; 
import '../styles/estagiario.css'
import perfil from '../imagens/perfil.png';

const Usuario = () => {
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

            <form>
              <div className="row">
                <li className="lista-form col-md-6 col-sm-12">
                  <span>Nome</span>
                  <input
                    type="text"
                    name="nome"
                  />
                </li>

                <li className="lista-form col-md-6 col-sm-12">
                  <span>Sobrenome</span>
                  <input
                    type="text"
                    name="sobrenome"
                  />
                </li>

                <li className="lista-form col-md-6 col-sm-12">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                  />
                </li>

                <li className="lista-form col-md-6 col-sm-12">
                  <span>Data de nascimento</span>
                  <input
                    type="date"
                    name="dataNascimento"
                  />
                </li>

                <li className="lista-form col-md-6 col-sm-12">
                  <span>Celular</span>
                  <input
                    type="text"
                    name="celular"
                  />
                </li>

                <li className="lista-form col-md-6 col-sm-12">
                  <span>Função</span>
                  <input
                    type="text"
                    name="funcao"
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
