import "../components/Footer.css"

function Footer(){
    return(
        <div className="Container_Footer">
            <div className="Social_Media">
                <h6>Contacto & Redes Sociales</h6>
                <div>
                    <img src="../src/assets/Icons/Mail_Footer.png" alt="" />
                    <p>SupportFlowy@flowy.com</p>
                </div>
                <div>
                    <img src="../src/assets/Icons/Facebook_Footer.png" alt="" />
                    <a href="">https://facebook.com</a>
                </div>
                <div>
                    <img src="../src/assets/Icons/Twitter_Footer.png" alt="" />
                    <a href="">https://twitter.com</a>
                </div>
            </div>
            <div className="Footer_I">
                <img src="../src/assets/Icons/Plant_Footer.png" alt="" />
            </div>
        </div>
    )
}

export default Footer