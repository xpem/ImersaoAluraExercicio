import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video/index';
import CadastroCategoria from './pages/cadastro/categoria/index'

const Pagina404 = () => (<div>Página 404</div>)


ReactDOM.render(
  // gerenciamento de rotas do spa utilizando react-router-dom
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      {/* especifica rota padrão com o App */}
      <Route path="/" component={Home} exact />

       <Route component={Pagina404}></Route>

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
