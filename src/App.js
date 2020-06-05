import React, { Fragment } from 'react';
import Header from './components/layout/Header';
import FormularioClima from './components/FormularioClima';
import ClimaResultado from './components/ClimaResultado';
import Contenido from './components/layout/Contenido';
import 'weather-icons/css/weather-icons.css';
//Redux
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
            <Fragment>
        <Header />
        <Contenido />
    </Fragment>
    </Provider>
  );
}

export default App;