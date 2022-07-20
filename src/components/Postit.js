//import { render } from "@testing-library/react";

import React, {useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap'


const Postit =()=>{

    const[titulo, setTitulo ]= useState("");
    const[descripcion, setDescripcion ]= useState("");
    const[importante, setImportante ]= useState(false);


    const handleSubmit = e =>{
    e.preventDefault();
    
    }

    return(
   
        <div className=" container-md">
            
        <form onSubmit={handleSubmit}>
            
            <label>
              
              <input type="text" name="titulo" placeholder="Titulo" onChange={(e)=> setTitulo(e.target.value)}/>
              
            </label>
            
            
            <label>
              
              <input type="text" name="descripcion" placeholder="Descripcion" onChange={(e)=> setDescripcion(e.target.value)}/>
              
            </label>
            <label>
    
            <label>
                
                <input type="checkbox" name="importante" onChange={(e)=> setImportante(e.target.checked)}/>
                Importante!
            </label>
    
            </label>
            <input type="submit" value="Submit" onClick='' />
          </form>
        
       </div>
            
   
   
   
   

    )

    
}
export default Postit;



