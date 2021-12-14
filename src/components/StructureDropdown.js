import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function StructureDropdown() {
    const [structures, setStructures] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:8000/fetchstructures').then((response) => {
        console.log(response);
        setStructures(response.data)
    }).catch((error) => console.log(error)); 
    }, [])
    
    return (
        <>
            <option value></option> 
            {structures.map((item) => {
                const { structure_id, structure } = item;
                return <option key={structure_id} value={structure}>{structure}</option>
            })}
        </>
        
    )
}

export default StructureDropdown
