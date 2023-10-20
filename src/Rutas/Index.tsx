import Header from "../components/Header";
import Banner from "../components/Banner"
import Steps from "../components/Steps";
import Product from "../components/Product";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

import { Divider } from "@mui/material";

import "../Rutas/Index.css"

function Index(){
    return(
        <div className="Contenedor_I">
            <div className="Header_I">
                <Header></Header>
            </div>
            <div className="Cuerpo_I">
                <div className="Margen_I">
                    <Banner></Banner>
                    <Divider></Divider>
                    <Steps></Steps>
                </div>
            </div>
            <div className="Product_I">
                <Product></Product>
            </div>
            <div className="AboutUs_I">
                <AboutUs></AboutUs>
            </div>
            <div className="Footer_I">
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Index