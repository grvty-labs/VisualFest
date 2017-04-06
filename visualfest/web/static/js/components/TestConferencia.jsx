import React, { Component } from 'react';
var images = [
  'http://soul-fi.ipn.pt/wp-content/uploads/2014/09/user-icon-silhouette-ae9ddcaf4a156a47931d5719ecee17b9.png', 'http://soul-fi.ipn.pt/wp-content/uploads/2014/09/user-icon-silhouette-ae9ddcaf4a156a47931d5719ecee17b9.png', 'http://soul-fi.ipn.pt/wp-content/uploads/2014/09/user-icon-silhouette-ae9ddcaf4a156a47931d5719ecee17b9.png'];
var informations = ['Titulo de la Conferencia', 'Titulo de la Conferencia', 'Titulo de la Conferencia'];
var names = ['Nombre del ponente', 'Nombre del ponente', 'Nombre del ponente'];
var hours = ['Horario', 'Horario', 'Horario'];

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
        <Galeria images=
          { images } informations = { informations } names = { names } hours = { hours } />
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
    var imagesHTML = this.props.images.map(function (image) {
      return <img src = { image } className = "imagesGaleria"></img>;
    });

    var informacionConferencia = this.props.informations.map(function (information) {
      return <h5 className = "tituloConferencia">{ information }</h5>;
    });

    var nombre = this.props.names.map(function (name) {
      return <h6 className = "nombreConferencia">{ name }></h6>;
    });

    return (
      <div className = "galeria">
        { imagesHTML }
      </div>
    );
  },
});

export default App;
