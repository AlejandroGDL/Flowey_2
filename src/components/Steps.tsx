import "../components/Steps.css"

function Steps(){
    return(
        <div className="Container_Step">
            <div className="Containter_Img_S">
                <div className="Step1">
                    <img src="../src/assets/Step1.svg" alt="Paso 1" />
                </div>
                <img src="../src/assets/Icons/Arrow_Right.png" alt="Flecha" className="Flecha_S"/>
                <div className="Step2">
                    <img src="../src/assets/Step2.svg" alt="Paso 2" />
                </div>
                <img src="../src/assets/Icons/Arrow_Right.png" alt="Flecha" className="Flecha_S"/>
                <div className="Step3">
                    <img src="../src/assets/Step3.svg" alt="Paso 3" />
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