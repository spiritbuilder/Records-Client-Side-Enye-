import React from 'react'
import "./Display.css"

function Display({patients}) {
    console.log(patients);
    return (
        
        <div>
            <div className="display">
            {patients && patients.map((patient)=>(
                <div className="patient">
                    <div className="avatar">
                        {patient.FirstName[0]+""+patient.LastName[0]}
                    </div>
                    <div className="name">{patient.FirstName+" "+patient.LastName}</div>
                    </div>
                    
                ))}
                
            </div>
        </div>
    )
}

export default Display
