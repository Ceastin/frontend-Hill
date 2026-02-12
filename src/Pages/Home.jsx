import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeCanvas from "../components/HomeCanvas";
import ProjectCarousal from "../components/ProjectCarousal";
import Workspace from "../components/workspace";
import ToolBox from "../components/ToolBox";

function Home(){
    return (
        <div>
            <Header></Header>
            <HomeCanvas></HomeCanvas>
            <ProjectCarousal></ProjectCarousal>
            <Workspace></Workspace>
            <ToolBox></ToolBox>
            <Footer></Footer>
        </div>
    );
}
export default Home;