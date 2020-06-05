import React, { Fragment, useEffect } from 'react';
import FormularioClima from '../FormularioClima';
import ClimaResultado from '../ClimaResultado';
//Redux
import {  useSelector } from 'react-redux'; 


const Contenido = () => {
    const listadoClima = useSelector( state => state.clima.clima);
    const error = useSelector( state => state.clima.error);
 
    
    useEffect( () => {
         
    }, [listadoClima]);

    console.log("detalleClima desde el contenido")
    console.log(listadoClima)
    return (
      <Fragment>
        {
          error && Number(error.data.cod) === 404? 
          (
           <div className="alert alert-danger" role="alert">
                No se encontró la ciudad.
          </div>
          )
          : 
          null
        }

        {
          error === undefined ? 
            (
            <div className="alert alert-info" role="alert">
                  Hubo un error con el servidor
            </div>
            )
            : 
            null
        }

        <div className="container mt-4">
          <div className="row d-flex justify-content-center align-items-center my-5">
            <div className="col-md-6">
              <FormularioClima />
            </div>            
          </div>
          <div className="row ">
          <div className="col">
              <ClimaResultado resultado={listadoClima} />
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default Contenido;