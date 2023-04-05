import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from "reactstrap";
import React from "react";

const courseList = [
  {id: 1, nombre: 'Calculo vertorial'},
  {id: 2, nombre: 'Programación de nuevas tecnologias'},
  {id: 3, nombre: 'Fisica Electricidad y Magnetismo'},
  {id: 4, nombre: 'Logica Digital'},
  {id: 5, nombre: 'Core Curriculum Persona y Cultura I'},
  {id: 6, nombre: 'Ingles'},
];



export class TablaCursos extends React.Component{

  state={
    courseList: courseList
  }

  render(){
    return (
      <>
      <Container>
      <br />
      <Button color="primary">Insertar Nuevo Curso</Button>
      <br /><br />
      </Container>
  
      <Table>
        <thead><tr><th>Id</th>
        <th>Nombre</th>
        <th>Acciones</th>
        </tr></thead>
        <tbody>
          {this.state.courseList.map((elemento)=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.nombre}</td>
              <td><Button color="primary">Editar</Button>{"  "}
              <Button color="danger">Eliminar</Button>
              </td>

            </tr>
          ))}
  
        </tbody>
  
      </Table>
  
      </>)
  }

}



