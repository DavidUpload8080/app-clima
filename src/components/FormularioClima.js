import React, { useState } from 'react';
import useFormClima from './useFormClima';
//Redux
import { useDispatch } from 'react-redux';
import {  consultarClima } from '../actions/climaAction';
const FormularioClima = () => {
    const dispatch = useDispatch();     
    
    const consulta = {
        nombreCiudad: '',
        nombrePais: ''
    }; 
    
    const handleSubmit = e => {
        e.preventDefault();       
        if(validaciones()){
            console.log("paso la validacion");
            dispatch(consultarClima( valoresFormulario.nombreCiudad.trim(), valoresFormulario.nombrePais))             
        }
    }

    const {  
            handleChange,
            errors,
            valoresFormulario,
            validaciones
        } = useFormClima(consulta);

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="font-weight-bold" htmlFor="nombreCiudad">
            Ciudad
          </label>
          <input
            type="text"
            name="nombreCiudad"
            id="nombreCiudad"
            className="form-control"
            ria-describedby="errorCiudad"
            placeholder="Ingresar ciudad"
            value={valoresFormulario.nombreCiudad}
            onChange={handleChange}
          ></input>
          {errors.nombreCiudad ? (
            <small id="errorCiudad" className="form-text text-danger">
              {errors.nombreCiudad}
            </small>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="nombrePais" className="font-weight-bold">
            Países
          </label>
          <select
            className="form-control"
            id="nombrePais"
            name="nombrePais"
            value={valoresFormulario.nombrePais}
            onChange={handleChange}
          >
            <option value="">Seleccione un país</option>
            <option value="CL">Chile</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
          {errors.nombrePais ? (
            <small id="errorPais" className="form-text text-danger">
              {errors.nombrePais}
            </small>
          ) : null}
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Obtener Clima
        </button>
      </form>
    );
}

export default FormularioClima;