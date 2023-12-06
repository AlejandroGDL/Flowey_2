import "../components/AboutUs.css"

// Imagenes
import OurPhoto1 from '../assets/Photos/OurPhoto1.jpg';
import OurPhoto2 from '../assets/Photos/OurPhoto2.jpg';
import OurPhoto3 from '../assets/Photos/OurPhoto3.jpg';
import OurPhoto4 from '../assets/Photos/OurPhoto4.jpg';
import OurPhoto5 from '../assets/Photos/OurPhoto5.jpg';
import Objetivo from '../assets/Objetivo.svg';
import Meta from '../assets/Meta.svg';
import Inovacion from '../assets/Inovacion.svg';


function AboutUs(){
    return(
        <div className="Container_AboutUs">
            <div className="Header_AboutUs">
                <div>
                    <h4>¿Quienes somos?</h4>
                    <p>Somos un grupo de 5 estudiantes del Instituto Tecnológico de Pabellón de Arteaga quienes creamos FLOWEY, una empresa que desea mejorar el cuidado de las plantas. Nuestro objetivo principal es que las personas tengan una mejor monitorización de sus plantas. Desde nuestro inicio, nos hemos comprometido a crear un producto de fácil acceso para las personas.</p>
                    <p>Creemos en la tecnología para realizar una tarea como sería realizar el cuidado de nuestras plantas. Nos esforzamos por hacer que sea de fácil uso apoyándonos con la tecnología Open Source. Trabajamos con compañeros de otras carreras para realizar nuestra meta.</p>
                </div>
                <div>
                    <img src={OurPhoto2} alt="Nosotros 1"  id="Photo"/>
                    <img src={OurPhoto3} alt="Nosotros 2" id="Photo"/>
                    <img src={OurPhoto4} alt="Nosotros 3" id="Photo"/>
                    <img src={OurPhoto5} alt="Nosotros 4" id="Photo"/>
                    <img src={OurPhoto1} alt="Nosotros 5" id="Photo"/>
                </div>
            </div>
            <div className="Footer_AboutUS">
                <div className="Ob_AboutUS">
                    <p>Objetivo:</p>
                    <img src={Objetivo} alt="" />
                    <p>Flowey es un proyecto desarrollado con el fin de ser un accesorio para mejorar el cuidado de las plantas. Esto sería una propuesta para solucionar el problema de los malos cuidados que al día de hoy se miran con los cuidados de plantas.</p>
                </div>
                <div className="Me_AboutUS">
                    <p>Meta:</p>
                    <img src={Meta} alt="" />
                    <p>El equipo busca que el proyecto en el transcurso que se tiene planeado se pueda desarrollar el accesorio como se tiene planeado. Una presentación bastante agradable y un costo accesible para cualquier persona.</p>
                </div>
                <div className="In_AboutUS">
                    <p>Innovación:</p>
                    <img src={Inovacion} alt="" />
                    <p>A diferencia de otros productos, el nuestro se caracteriza por ser económico y ser más un accesorio que una maseta. Además, ofrecemos un servicio web el cual permitirá monitorear tu planta desde cualquier dispositivo con conexión a internet.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs