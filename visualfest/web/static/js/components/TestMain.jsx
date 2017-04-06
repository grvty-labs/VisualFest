import React, { Component } from 'react';

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
      <h1>VEINTEDIECISIETE</h1>
    );
  },
});

var CajaTexto = React.createClass({
  render() {
    return (
      <div>
        <p className = "cajaTextoMain"> Successful businesses have many things in common, today we’ll look at the big
‘R’of recognition and how a digital advertising network may help.</p>
<p>Recognition can be illustrated by two individuals entering a crowded room at a
party. Both walk to the far side of the room, one of them slips through the crowd
easily and unnoticed as they reach the far side. The second person takes much
longer to reach the far side because they are engaged in conversations along the
way as they continue to meet acquaintances and friends during their path. Which
type of person would you like to model your business after?
Your business is in a continual battle for your customers’ recognition whether you
know it or not. If you happen to be fortunate enough to be in a marketplace with </p>
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
