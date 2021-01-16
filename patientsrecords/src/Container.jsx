import React, { Component } from 'react';
import axios from "axios";
import "./Container.css";
import Display from "./Display.jsx"

class Container extends Component {
state={
    searchvalue:"",
    patients:"",
    filtered:""
}

componentDidMount(){
this.makeApiCall();
console.log(this.state)
}
handleChange = e =>{
    
    this.setState({searchvalue: e.target.value})
    console.log(e.target.value)
    console.log(this.state)
    
}
handleSearch= (searchvalue, filter1, filter2)=>{
    


}
makeApiCall = async ()=>{
const j  = await axios.get("https://api.enye.tech/v1/challenge/records");
this.setState({patients: j.data.records.profiles})
}

    render() {
        return (
            <div >
                <div className="header">
                    <h1>Patients Records App</h1>
                    <div className="search">
                        <input onChange={this.handleChange}  value={this.state.searchvalue} className="topsearchbar" type="text" placeholder="Kindly input Name to search"/>
                        
                    </div>
                    <div className="filter">
                        <select name="Gender" id="gender">
                            <option value="">Select Gender</option>
                            <option  value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">other</option>
                        </select>
                        <select name="" id="gender">
                            <option value="">Select Gender</option>
                            <option  value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    
                </div>
                <Display patients={this.state.patients} />
                
            </div>
        );
    }
}

export default Container;

//<button onClick={this.handleSearch} className= "searchbtn"> Search</button>
