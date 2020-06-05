import React, { useState } from 'react';


const useFormClima = (consulta) => {
    const [errors, setErrors] = useState({})   
    const [valoresFormulario, setValoresFormulario] = useState(consulta); 

    const handleChange = e => {
        e.preventDefault();        
        const {name, value} = e.target
        const fieldValue = { [name]: value }
        setValoresFormulario({
            ...valoresFormulario,
            ...fieldValue
        })       
        validaciones(fieldValue)        
    }

    const validaciones = (campoValidar = valoresFormulario) => {
        let  temp = {...errors}      

        if ('nombreCiudad' in campoValidar)
        temp.nombreCiudad = campoValidar.nombreCiudad ? "" : "Ciudad es obligatorio"; 
        
        if ('nombrePais' in campoValidar)
        temp.nombrePais = campoValidar.nombrePais ? "" : "País es obligatorio"; 
        
        setErrors({
            ...temp
        })
        if (campoValidar === valoresFormulario)
            return Object.values(temp).every(x => x === "") 
    } 
    
    return {    
        handleChange,
        errors,
        valoresFormulario,
        validaciones
    };
}
export default useFormClima;