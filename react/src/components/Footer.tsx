import "../components/Footer.css"

// Imagenes
import MailFooter from "../assets/Icons/Mail_Footer.png"
import FacebookFooter from "../assets/Icons/Facebook_Footer.png"
import TwitterFooter from "../assets/Icons/Twitter_Footer.png"
import PlantFooter from "../assets/Icons/Plant_Footer.png"


function Footer(){
    return(
        <div className="Container_Footer">
            <div className="Social_Media">
                <h6>Contacto & Redes Sociales</h6>
                <div>
                    <img src={MailFooter} alt="" />
                    <p>SupportFlowy@flowy.com</p>
                </div>
                <div>
                    <img src={FacebookFooter} alt="" />
                    <a href="">https://facebook.com</a>
                </div>
                <div>
                    <img src={TwitterFooter} alt="" />
                    <a href="">https://twitter.com</a>
                </div>
            </div>
            <div className="Footer_I">
                <img src={PlantFooter} alt="" />
            </div>
        </div>
    )
}

export default Footer