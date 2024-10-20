import {Outlet} from "react-router-dom";
import ProfileFunctionalComponent from "./Profile"
import Profile from "./ProfileClass";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        //API call
        console.log("Parent componentDidMount");
    }

    render(){
        console.log("Parent Render");
        return(
            <>
            <h1>This Is About Us Page</h1>
            <p>
                This is the paragraph for our about us page 
            </p>
            <Profile name={"Second Child"}/>
            </>
        )
    }
}

export default About;