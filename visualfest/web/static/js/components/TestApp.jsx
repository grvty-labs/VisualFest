import React, { Component } from 'react';
import { CajaTexto } from './Componentes.jsx';
import { Informes } from './Componentes.jsx';

export class App extends Component {
  render() {
    return (
      <Body/>
    );
  }
};

var Body = React.createClass({
  render() {
    return (
      <div className = "body">
        <Contenedor/>
      </div>
    );
  },
});

var Contenedor = React.createClass({
  render() {
    return (
      <div className = "contenedor">
        <ConetendorImage/>
        <ContenedorTexto/>
        <Informacion/>
      </div>
    );
  },
});

var ConetendorImage = React.createClass({
  render() {
    return (
      <div className = "conetendorImage">
        <ImagenCircular/>
        <VerPerfil/>
      </div>
    );
  },
});

var ImagenCircular = React.createClass({
  render() {
    return (
      <img className = "imagenCircular" src = "http://soul-fi.ipn.pt/wp-content/uploads/2014/09/user-icon-silhouette-ae9ddcaf4a156a47931d5719ecee17b9.png" alt = ""/>
    );
  },
});

var VerPerfil = React.createClass({
  render() {
    return (
      <div className = "verPerfil">
        <h3>VER PERFIL</h3>
        <img className = "arrow" src = "https://cdn4.iconfinder.com/data/icons/dot/256/arrow_up_right.png" alt = ""></img>
      </div>
    );
  },
});

var ContenedorTexto = React.createClass({
  render() {
    return (
      <div className = "contenedorTexto">
        <TituloCentrado/>
        <CajaTexto/>
      </div>
    );
  },
});

var TituloCentrado = React.createClass({
  render() {
    return (
      <h1>TÍTULO DE LA CONFERENCIA</h1>
    );
  },
});

var Informacion = React.createClass({
  render() {
    return (
      <div className = "contenedorInformes">
        <Informes/>
      </div>
    );
  },
});

export default App;
