import Button from "@mui/material/Button/Button"
import "../components/Product.css"

function Product(){
    return(
        <div className="Container_Product">
            <div className="Description_P">
                <div className="Text_Product">
                    <h1>Flowey V1</h1>
                    <h6>No hay nada mejor que una planta feliz</h6>
                    <p>Está es nuestra primera versión de un kit el cual permite la monitorización de tus plantas, desde cualquier dispositivo con conexión a internet.</p>
                    <p>Características:</p>
                    <p>
                        <ul>
                            <li>Compacto</li>
                            <li>Económico</li>
                            <li>Sencillo</li>
                            <li>Fácil de entender</li>
                        </ul>
                    </p>
                </div>
                <div className="Buy_Product">
                    <div>
                        <img src="../src/assets/Sensor_Test.png" alt="Kit Imagen" />
                    </div>
                    <div>
                        <Button variant="contained" href="amazon.com.mx" id="Comprar_I">Comprar Ahora!</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product