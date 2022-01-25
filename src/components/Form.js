import axios from 'axios';
import React, {useState} from 'react';
import {url} from '../helpers/url';
import {fileUpload} from '../helpers/fileUpload';
import '../styles/Form.css';

export const Form = () => {

    const [estudiante, setEstudiante] = useState({
        nombreEquipo: '',
        nombreJugador: '',
        piernaHabil: '',
        nacionalidad: '',
        edad: '',
        foto: ''
    })

    const {nombreEquipo,nombreJugador,piernaHabil,nacionalidad,edad,foto} = estudiante;

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
            estudiante.foto = response;
        }).catch(error => {
            console.log(error.message)
        }) 
    }

    return (
        <div>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>Registro de Jugadores</h2>
           <hr/>
               <div>
                   <label>Nombre Equipo</label>
                   <input id="inputNombre" name="nombreEquipo" value={nombreEquipo} onChange={handleChanged}/>
               </div>
               {/* <div>
                   <label>Tipo Documento</label>
                   <select id="selectTipo" name="tipo" value={tipo} onChange={handleChanged}>
                       <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                       <option name="C.C" value="C.C">C.C</option>
                       <option name="T.I" value="T.I">T.I</option>
                       <option name="C.E" value="C.E">C.E</option>
                   </select>
               </div> */}
              
              <div>
                   <label>Nombre Jugador</label>
                   <input id="inputNombre" name="nombreJugador" value={nombreJugador} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Pierna Habil</label>
                   <input id="inputPierna" name="piernaHabil" value={piernaHabil} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Nacionalidad</label>
                   <input id="inputNacionalidad" name="nacionalidad" value={nacionalidad} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Edad</label>
                   <input id="inputEdad" type="number"  name="edad" value={edad} onChange={handleChanged}/>
               </div>
               <div>
                   <label>foto</label>
                   <input id="botonFoto" type="file" name="foto" value={foto}  onChange={handleFileChange}/>
                    
               </div>
               <div>
                   <button onClick={() => postData()} id="btnRegistro">Enviar</button> 
               </div>
           </form>
        </div>
    )
}
