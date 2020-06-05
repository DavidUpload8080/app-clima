import React, {useRef} from 'react';
//Redux
import { useDispatch } from 'react-redux';
import {  eliminarItemClima } from '../actions/climaAction';

const ClimaResultado = ({resultado}) => {
    const dispatch = useDispatch();     
    const divCard = useRef(null);
    const iconosClima = {
        Thunderstorm: "wi-thunderstorm",
        Drizzle: "wi-sleet",
        Rain: "wi-storm-showers",
        Snow: "wi-snow",
        Atmosphere: "wi-fog",
        Clear: "wi-day-sunny",
        Clouds: "wi-day-fog"
      }
      console.log(resultado);
      const obtenerIconoPorId = (rangoId) => {
         
            if(rangoId >= 200 && rangoId <= 232)
                return iconosClima.Thunderstorm; 
            if(rangoId >= 300 && rangoId <= 321)
                return iconosClima.Drizzle; 
            if(rangoId >= 500 && rangoId <= 531)
                return iconosClima.Rain; 
            if(rangoId >= 600 && rangoId <= 622)
                return iconosClima.Snow;                
            if(rangoId >= 701 && rangoId <= 781)
                return iconosClima.Atmosphere; 
            if(rangoId === 800)
                return iconosClima.Clear;
            if(rangoId >= 801 && rangoId <= 804)
                return iconosClima.Clouds;              
            
            return iconosClima.Clouds;        
      }

    const gradosKelvin = 273.15;

    const eliminarTarjeta = (e, valor) => { 
        dispatch(eliminarItemClima(valor))             
    }


   
    return (
      <div className="card-columns">
        {resultado.map((item, value) => (
          <div
            ref={divCard}
            id={item.id}
            key={item.id}
            className="card bordes-cards ancho-card"            
            onClick={(e) => eliminarTarjeta(e, item.id)}
            
          >
            <div className="card-body text-center">
              <p>
                <i
                  className={`wi ${obtenerIconoPorId(
                    item.weather[0].id
                  )} display-1`}
                ></i>
              </p>

              <h1>
                {parseFloat(item.main.temp - gradosKelvin, 10).toFixed(1)}{" "}
                <span>&#x2103;</span>
              </h1>

              <h5 className="card-title">{item.name}</h5>

              <p>
                Max{" "}
                {parseFloat(item.main.temp_max - gradosKelvin, 10).toFixed(2)}
                <span>&#x2103;</span>
              </p>
              <p>
                Min{" "}
                {parseFloat(item.main.temp_min - gradosKelvin, 10).toFixed(2)}
                <span>&#x2103;</span>
              </p>
              <p className="card-text">
                <small className="text-muted">10/32</small>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
}

export default ClimaResultado;