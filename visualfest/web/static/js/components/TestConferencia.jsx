import React, { Component } from 'react';

var conferencias = [
{ "imagen":"https://goo.gl/vkdnFs" , "information": "Titulo de la Conferencia","name":"Nombre del ponente", "hour":"Horario" },
{ "imagen":"https://goo.gl/vkdnFs" , "information": "Titulo de la Conferencia","name":"Nombre del ponente", "hour":"Horario" },
{ "imagen":"https://goo.gl/vkdnFs" , "information": "Titulo de la Conferencia","name":"Nombre del ponente", "hour":"Horario" }];


class App extends Component{
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
      <div className = "contenedorConferencia">
        <TituloCentrado/>
        <Galeria conferencias= { conferencias } />
      </div>
    );
  },
});

var TituloCentrado = React.createClass({
  render() {
    return (
      <h1>26 Abril</h1>
    );
  },
});

var Galeria = React.createClass({
  render() {
    var conferenciaHTMLS = this.props.conferencias.map(function (conferencia, index) {
      return (
        <div key = {index} className = "galeria">
          <img src = {conferencia.imagen} className = "imagesGaleria"></img>
          <h4 className = "textoImagenInformacion">{conferencia.information}</h4>
          <h5 className = "textoImagenNombre">{conferencia.name}</h5>
          <h6 className = "textoImagenHorario">{conferencia.hour}</h6>
        </div>
      );
    });

    return (
      <div className = "galeria">
        { conferenciaHTMLS }
      </div>
    );
  },
});

export default App;
