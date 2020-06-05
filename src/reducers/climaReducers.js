import { ACTION_TYPES }  from '../types';

const initialState = {
    clima: [],
    error: null,
    loading: false    
} 

export default function(state = initialState, action) {
    switch(action.type) {

         // Consulta del clima.
         case ACTION_TYPES.INICIAR_CONSULTA_CLIMA:
            return {
                ...state,
                loading: action.payload
            }
        case ACTION_TYPES.CONSULTA_CLIMA_EXITO:
            
            const existe = state.clima.some(item => item.id === action.payload.id)
            let arrayData = [];
            if(existe){
                arrayData = state.clima;
            }else{
                arrayData = [...state.clima, action.payload]   
            }

            return {
                ...state,
                loading: false,
                error: null,                                      
                clima: arrayData
            }
        case ACTION_TYPES.CONSULTA_CLIMA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ACTION_TYPES.ELIMINAR_ITEM_CLIMA:
            console.log("action.payload")
            console.log(action.payload)            
            return {
                ...state,
                loading: null,
                clima: state.clima.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}