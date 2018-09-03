import React, { Component } from 'react';
import logo from './logo.svg';
import PlacarTime from './PlacarTime';
import './App.css';

const dados = {
  partida: {
    estadio: "Maracanã/RJ",
    data: "03/09/2018",
    horario: "19h",
  },
  casa: {
    nome: "Flamengo",
  },
  visitante: {
    nome: "Vasco",
  },
};

class App extends Component {
  render() {
    return (
          <PlacarTime
            partida={dados.partida}  
            casa={dados.casa}
            visitante={dados.visitante}        
          />
    );
  }
}

export default App;
