import React, { Component } from 'react';
import "./estilo.css";

class ListaDeCategorias extends Component {
    render() { 
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    <li className="lista-categorias_item">categoria</li>
                    <li className="lista-categorias_item">categoria</li>
                    <li className="lista-categorias_item">categoria</li>
                </ul>
                
                <input type="text" className="lista-categorias_input" />
            </section>
        );
    }
}
 
export default ListaDeCategorias;