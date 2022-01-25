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
                    <th>Nombre Completo</th>
                    <th>Tipo Documento</th>
                    <th>Número Documento</th>
                    <th>Teléfono</th>
                    <th>Celular</th>
                    <th>Dirección</th>
                    <th>Imagen</th>
                    <th>Acción</th>
                    </tr>
                </thead>
                
                 <tbody>
                     
                     {
                         registro.map(objeto => (
                             <tr key={objeto.id}>
                                 <td>{objeto.nombre}</td>
                                 <td>{objeto.tipo}</td>
                                 <td>{objeto.numero}</td>
                                 <td>{objeto.telefono}</td>
                                 <td>{objeto.celular}</td>
                                 <td>{objeto.direccion}</td>
                                 <td><img src={objeto.imagen} width="40" height="50" alt=""/></td>
                                 <td><button onClick={() => deleteData(objeto.id)}>Eliminar</button></td>
                            </tr>
                         ))
                     }
                 </tbody>
            </table>
        </div>
    )
}
