import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import {url} from '../helpers/url';
import '../styles/List.css';

export const List = () => {

    const [registro, setRegistro] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
            axios.get(url)
            .then(response => {
                setRegistro(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const deleteData = (id) => { //recibe por parametro el id
         axios.delete(url+id)    
         .then(response => {
             getData();         //se llama a getData para actualizar
           console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    console.log(registro)
    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                    <th>Nombre del Equipo</th>
                    <th>Nombre del Jugador</th>
                    <th>Pierna Habil</th>
                    <th>Nacionalidad</th>
                    <th>Edad</th>
                    <th>Foto</th>
                    </tr>
                </thead>
                
                 <tbody>
                     
                     {
                         registro.map(objeto => (
                             <tr key={objeto.id}>
                                 <td>{objeto.nombreEquipo}</td>
                                 <td>{objeto.nombreJugador}</td>
                                 <td>{objeto.piernaHabil}</td>
                                 <td>{objeto.nacionalidad}</td>
                                 <td>{objeto.edad}</td>
                                 <td><img src={objeto.foto} width="40" height="50" alt=""/></td>
                                 <td><button onClick={() => deleteData(objeto.id)}>Eliminar</button></td>
                            </tr>
                         ))
                     }
                 </tbody>
            </table>
        </div>
    )
}
