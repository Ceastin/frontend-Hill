import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Canvas from "../components/Canvas";
import Canvas2 from "../components/Canvas2";
import Canvas3 from "../components/Canvas3";
function Landing(){
    return (
        <div>
            <Header></Header>
            <Canvas></Canvas>
            <Canvas2></Canvas2>
            <Canvas3></Canvas3>
            <Footer></Footer>
        </div>
    )
}
export default Landing;