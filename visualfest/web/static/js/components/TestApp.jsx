import React, { Component } from 'react';

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

var CajaTexto = React.createClass({
  render() {
    return (
      <div className = "cajaTexto">
        <p >Successful businesses have many things in common, today we’ll look at the big
‘R’of recognition and how a digital advertising network may help.</p>
<p>Recognition can be illustrated by two individuals entering a crowded room at a
party. Both walk to the far side of the room, one of them slips through the crowd
easily and unnoticed as they reach the far side. The second person takes much
longer to reach the far side because they are engaged in conversations along the
way as they continue to meet acquaintances and friends during their path. Which
type of person would you like to model your business after?</p>
<p>Your business is in a continual battle for your customers’ recognition whether you
know it or not. If you happen to be fortunate enough to be in a marketplace with </p>
      </div>
    );
  },
});

var Informes = React.createClass({
  render() {
    return (
      <div className = "Informes">
        <p>02:30pm</p>
        <p>sala 1</p>
      </div>
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
