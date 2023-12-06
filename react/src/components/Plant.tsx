import "./Plant.css"
import {useEffect,useState} from "react";
import axios from "axios";
import clienteAxios from "../config/axios";

import Plant_M from "../assets/Planta_M.png";
import GoodState from "../assets/Icons/GoodState.png";
import HumedadIcon from "../assets/Icons/HumedadIcon.png";
import TemperaturaIcon from "../assets/Icons/TemperaturaIcon.png";

function Plant(){
    const [Plantas, setPlantas] = useState<any[]>([])

    //Primer accion al abrir 
    useEffect (()=>{
        getAllPlantas();
    },[])

    //Metodo Buscar Planta
    const getAllPlantas = async () => {
        const response = await clienteAxios.get('/api/Plantas')
        setPlantas(response.data as any)
    }

    return(
        <div className="PlantaContainer">
            {Plantas.map((Planta)=>(
                <tr key={Planta.id}>
                    <div className="Container_P">           
                        <div className="Container_I"> 
                            <img src={Plant_M} alt="Imagen Plata" />
                        </div>
                        <div className="Container_Estado">
                            <img src={GoodState} alt="" />
                        </div>
                        <div className="Cuerpo_I">
                            <div>
                                <h5>{Planta.Plant_Name}</h5>
                            </div>
                            <div className="Sensores">
                                <div>
                                    <div className="Sensor_I">
                                        <img src={HumedadIcon} alt="" />
                                    </div>
                                    <div className="Sensor_Cuerpo">
                                        <p>Humedad Tierra:</p>
                                        <p>{Planta.Earth_Humidity}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="Sensor_I">
                                        <img src={TemperaturaIcon} alt="" />
                                    </div>
                                    <div className="Sensor_Cuerpo">
                                        <p>Temp. Ambiente:</p>
                                        <p>{Planta.Ambient_Humidity}°</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="Sensor_I">
                                        <img src={HumedadIcon} alt="" />
                                    </div>
                                    <div className="Sensor_Cuerpo">
                                        <p>Hum. Ambiente:</p>
                                        <p>{Planta.Room_Temperature}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </tr>
            ))}
        </div>
    )
}

export default Plant
