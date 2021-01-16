import React, { Component } from 'react';
import axios from "axios";
import "./Container.css";

class Container extends Component {
state={
    searchvalue:"",
    patients:""
}
handleChange = e =>{
    this.setState({searchvalue: e.target.value})
}
handleSearch= ()=>{
this.makeApiCall(this.state.searchvalue);
console.log(this.state)
}
makeApiCall = async searchvalue=>{
const j  = await axios.get("https://api.enye.tech/v1/challenge/records");
this.state.patients= j.data.records.profiles;
}

    render() {
        return (
            <div >
                <div className="header">
                    <h1>Patients Records App</h1>
                    <div className="search">
                        <input onChange={e=>this.handleChange(e)}  className="topsearchbar" type="text" placeholder="Kindly input Name to search"/>
                        <button onClick={this.handleSearch} className= "searchbtn"> Search</button>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}

export default Container;
