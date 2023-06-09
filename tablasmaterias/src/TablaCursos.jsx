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
    courseList: courseList,
    form:{
      id:" ",
      nombre: " ",
    },
    modalInsertar: false,
    modalEditar: false,
  }

  handleChange=e=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  }

  mostrarModalInsertar=()=>{
    this.setState({modalInsertar: true});
  }

  mostrarModalEditar=(registro)=>{
    this.setState({modalEditar: true, form: registro});
  }


  ocultarModalInsertar=()=>{
    this.setState({modalInsertar: false});
  }

  ocultarModalEditar=()=>{
    this.setState({modalEditar: false});
  }

  insertar= ()=>{
    let valorNuevo = {...this.state.form};
    let lista = this.state.courseList;

    let contador = 0;
    let datotemp = 0;

    lista.map(()=>{

      let datotemp2 = lista[contador].id;

      if (datotemp < datotemp2){
        datotemp = datotemp2;
      }

      contador++;
    })

    valorNuevo.id = datotemp+1;
    lista.push(valorNuevo);
    this.setState({courseList : lista, modalInsertar: false});
  }

  greatestnumber=()=>{
    let valorNuevo = {...this.state.form};
    let lista = this.state.courseList;

    let contador = 0;
    let datotemp = 0;

    lista.map(()=>{

      let datotemp2 = lista[contador].id;

      if (datotemp < datotemp2){
        datotemp = datotemp2;
      }

      contador++;
    })

    return valorNuevo.id = datotemp+1;
  }

  editar=(dato)=>{
    let contador = 0;
    let lista=this.state.courseList;
    
    lista.map((registro)=>{
      if(dato.id==registro.id){
        lista[contador].id=dato.id;
        lista[contador].nombre=dato.nombre;
      }
      contador++;
    });
  
    this.setState({courseList: lista, modalEditar: false});
  }

  eliminar=(dato)=>{
    let opcion=window.confirm("¿Esta seguro de eliminar este curso?");
    if(opcion){
      let contador=0;
      let lista = this.state.courseList;
      lista.map((registro)=>{
        if(registro.id==dato.id){
          lista.splice(contador,1)
        }
        contador++;
      });
      this.setState({courseList: lista});
    }
  }

  render(){
    return (
      <>
      <Container>

      <br />
      <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Insertar Nuevo Curso</Button>{"   "}
      <br /><br />
  
      <Table>
        <thead><tr><th>ID</th>
        <th>Nombre</th>
        <th>Acciones</th>
        </tr></thead>
        <tbody>
          {this.state.courseList.map((elemento)=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.nombre}</td>
              <td><Button color="danger" onClick={()=>this.eliminar(elemento)}>Eliminar</Button></td>
              <td><Button color="primary" onClick={()=>this.mostrarModalEditar(elemento)}>Editar</Button>
              {" "}</td>
            </tr>
          ))}
        </tbody>
    </Table>

    </Container>
    
    <Modal id="botonAgregarCurso" isOpen= {this.state.modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Crear nuevo curso:</h3> 
          </div>
        </ModalHeader>          

        <ModalBody>
            <FormGroup>
              <label>ID:</label>
              <input className="form" readOnly type="text" value={this.greatestnumber()}/>
            </FormGroup>

            <FormGroup>
              <label>Nombre del curso:</label>
              <input className="form" name="nombre" type="text" onChange={this.handleChange} />
            </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button color="primary" onClick={()=>this.insertar()}>Insertar</Button>
            <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
        </ModalFooter>

    </Modal>

    <Modal id="botonEditarPantalla1" isOpen= {this.state.modalEditar}>
        <ModalHeader>
          <div>
            <h3>Edición del curso:</h3> 
          </div>
        </ModalHeader>          

        <ModalBody>
            <FormGroup>
              <label>ID:</label>
              {"   "}<input className="form-control" name="id" type="text" onChange={this.handleChange} value={this.state.form.id} />
            </FormGroup>

            <FormGroup>
              <label>Nombre:</label>
              {"   "}<input className="form" name="nombre" type="text" onChange={this.handleChange} value={this.state.form.nombre}/>
            </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button color="primary" onClick={()=>this.editar(this.state.form)}>Actualizar</Button>
            <Button color="danger" onClick={()=>this.ocultarModalEditar()}>Cancelar</Button>
        </ModalFooter>
    </Modal>    

  </>
  );
  
  }

}