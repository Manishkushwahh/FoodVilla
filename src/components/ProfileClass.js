import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name: "Manish Kushwah",
                location: "Dummy Location",
            },
        };
        console.log("Constructor" + this.props.name);
    }

    async componentDidMount(){
        //API call
        const data = await fetch(" https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })
        console.log("componentDidMount" + this.props.name);
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    render(){
        // const {count} = this.state;
        console.log("Render" + this.props.name);
        return(
            <div>
                <h2>React Class Component</h2>
                <img src={this.state.userInfo.avatar_url}/>
                <h3>Name : {this.state.userInfo.name}</h3>
                <h3>Location : {this.state.userInfo.location}</h3>
            </div>
        )
    }
};

/**
 * 
 * parent constructor
 * parent render
 *      child constructor
 *      child render
 * parent componentDidMount
 * Api call
 * child componentDidMount
 * child render
 * 
 */

export default Profile;