import { ACTION_TYPES }  from '../types'; 
import apiClima from '../config/apiClima';

/** 
 * Action: Obtener el clima por ciudad y país *
 *  */ 
export function consultarClima(ciudad, pais){
    return async (dispatch) => {
        dispatch(iniciarConsultaClima());
        try {            
            const respuesta = await apiClima.get(`/weather?q=${ciudad},${pais}&appid=87c7749e53edb4694fbd4493c0bb5250`);
            console.log(respuesta.data);
            dispatch(consultarClimaExito(respuesta.data))                 
        } catch (error) {                                 
            console.log(error.response)
            dispatch(consultarClimaError(error.response))
        }
    }
}
const iniciarConsultaClima = () => ({
    type: ACTION_TYPES.INICIAR_CONSULTA_CLIMA,
    payload: true
});
const consultarClimaExito = clima => ({
    type: ACTION_TYPES.CONSULTA_CLIMA_EXITO,
    payload: clima
});
const consultarClimaError = (error) => ({
    type: ACTION_TYPES.CONSULTA_CLIMA_ERROR,
    payload: error
});

/**
 * Action: Eliminar item clima
 * **/

 export function eliminarItemClima(codigo){
     return (dispatch) => {
        dispatch(eliminarItem(codigo));
     }
 } 
const eliminarItem = (codigo) => ({
    type: ACTION_TYPES.ELIMINAR_ITEM_CLIMA,
    payload: codigo
})
    
