import React, { Component } from 'react';
import { CajaTexto } from './Componentes.jsx';

class App extends Component{
  render() {
    return (
      <Body />
    );
  }
};

var Body = React.createClass({
  render() {
    return (
      <div className = "bodyMain">
        <Contenedor/>
      </div>
    );
  },
});

var Contenedor = React.createClass({
  render() {
    return (
      <div className = "contenedorMain">
        <TituloCentrado/>
        <Subtitulo/>
        <CajaTexto/>
      </div>
    );
  },
});

var TituloCentrado = React.createClass({
  render() {
    return (
      <div>
        <h1 className = "tituloAmarillo">VEINTE</h1>
        <h1 className = "tituloRosa">DIECISIETE</h1>
      </div>
    );
  },
});

var Subtitulo = React.createClass({
  render() {
    return (
      <h3 className = "subtitulo">PIENSA, INTERACTUA/TRANSFORMA</h3>
    );
  },
});


export default App;
