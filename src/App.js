import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
import ArrayDeNotas from "./dados/Notas";
import Categorias from "./dados/Categorias";
class App extends Component {

  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();

    // this.state = {
    //   notas:[],
    //   // categorias: [],
    // }
  }

  // criarNota(titulo, texto, categoria){
  //   const novaNota = {titulo, texto, categoria};
  //   const novoArrayNotas = [...this.state.notas,novaNota]
  //   const novoEstado = {
  //     notas:novoArrayNotas
  //   }
  //   this.setState(novoEstado)
  // }

  // adicionarCategoria(nomeCategoria){
  //   const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
  //   const novoEstado = {...this.state, categorias: novoArrayCategorias}
  //   this.setState(novoEstado)
  //   console.log(novoEstado)
  // }

  // deletarNota(index){
  //   let arrayNotas = this.state.notas;
  //   arrayNotas.splice(index,1);
  //   this.setState({notas: arrayNotas})
  //   console.log("deletando")
  // }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
        categorias={this.categorias.categorias}
        criarNota={this.notas._criarNota}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
          adicionarCategoria = {this.categorias.adicionarCategoria}
          categorias={this.categorias.categorias} />

          <ListaDeNotas
         notas={this.notas.notas}
         apagarNota = {this.notas.apagarNota}
         />
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
