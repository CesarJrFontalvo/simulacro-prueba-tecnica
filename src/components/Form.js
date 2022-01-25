import axios from 'axios';
import React, {useState} from 'react';
import {url} from '../helpers/url';
import {fileUpload} from '../helpers/fileUpload';
import '../styles/Form.css';

export const Form = () => {

    const [estudiante, setEstudiante] = useState({
        nombre: '',
        tipo: '',
        numero: '',
        telefono: '',
        celular: '',
        direccion: '',
        imagen: ''
    })

    const {nombre,tipo,numero,telefono,celular,direccion,imagen} = estudiante;

    const postData = () => {
         axios.post(url,estudiante)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
         
    }

    const handleChanged = ({target}) => {
        setEstudiante({
          ...estudiante,
          [target.name]: target.value
        })
    
      }

      const handleSubmit = (e) => {
       e.preventDefault();
      }

      const handleFileChange = (e) => {
        const file = e.target.files[0];
         fileUpload(file)
        .then(response => {
            estudiante.imagen = response;
        }).catch(error => {
            console.log(error.message)
        }) 
    }

    return (
        <div>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>Registro de Estudiantes</h2>
           <hr/>
               <div>
                   <label>Nombre Completo</label>
                   <input id="inputNombre" name="nombre" value={nombre} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Tipo Documento</label>
                   <select id="selectTipo" name="tipo" value={tipo} onChange={handleChanged}>
                       <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                       <option name="C.C" value="C.C">C.C</option>
                       <option name="T.I" value="T.I">T.I</option>
                       <option name="C.E" value="C.E">C.E</option>
                   </select>
               </div>
               <div>
                   <label>Número Documento</label>
                   <input id="inputNumero" type="number" name="numero" value={numero} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Teléfono</label>
                   <input id="inputTelefono" type="number" name="telefono" value={telefono} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Celular</label>
                   <input id="inputCelular" type="number" name="celular" value={celular} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Dirección</label>
                   <input id="inputDireccion" name="direccion" value={direccion} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Imagen</label>
                   <input id="botonImagen" type="file" name="imagen" value={imagen}    onChange={handleFileChange}/>
                    
               </div>
               <div>
                   <button onClick={() => postData()} id="btnRegistro">Enviar</button> 
               </div>
           </form>
        </div>
    )
}
