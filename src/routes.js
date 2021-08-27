import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Clientes } from './pages/Clientes';
import { Imoveis } from './pages/Imoveis';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/clientes'>
          <Clientes />
        </Route>
        <Route exact path='/imoveis'>
          <Imoveis />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export {Routes}