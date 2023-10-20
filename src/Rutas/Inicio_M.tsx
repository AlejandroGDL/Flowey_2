import Plant from "../components/Plant"
import "../Rutas/Inicio_M.css"

function Inicio_M(){
    return(
        <div className="Container_MPlant">
            <div className="PlantM_Header">
                <h1>Tus plantas</h1>
            </div>
            <div className="MPlant_Body">
                <Plant></Plant>
            </div>
        </div>
    )
}

export default Inicio_M