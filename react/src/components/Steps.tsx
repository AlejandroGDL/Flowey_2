import "../components/Steps.css"

// Imagenes
import Step1 from "../assets/Step1.svg"
import Step2 from "../assets/Step2.svg"
import Step3 from "../assets/Step3.svg"
import Arrow_Right from "../assets/Icons/Arrow_Right.png"

function Steps(){
    return(
        <div className="Container_Step">
            <div className="Containter_Img_S">
                <div className="Step1">
                    <img src={Step1} alt="Paso 1" />
                </div>
                <img src={Arrow_Right} alt="Flecha" className="Flecha_S"/>
                <div className="Step2">
                    <img src={Step2} alt="Paso 2" />
                </div>
                <img src={Arrow_Right} alt="Flecha" className="Flecha_S"/>
                <div className="Step3">
                    <img src={Step3} alt="Paso 3" />
                </div>
            </div>
            <div className="Instructions_S">
                <div>
                    <p>Paso 1:</p>
                    <p>Coloca el sensor en tu planta</p>
                </div>
                <div>
                    <p>Paso 2:</p>
                    <p>Registra la planta en nuestra pagina</p>
                </div>
                <div>
                    <p>Paso 3:</p>
                    <p>Felicidades! Ya puedes monitorear tu planta</p>
                </div>
                
            </div>
        </div>
        
    )
}

export default Steps