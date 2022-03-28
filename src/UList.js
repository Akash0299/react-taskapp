import React from "react";

const UList = (props) =>{ 
    const {data} = props;
    const createList = (data) =>{
              return <li key={data.id}>
                       <h3>Name: {data.name}</h3>
                        <h4>Email: {data.email}</h4>
                        <h4>Phone: {data.phone}</h4>
                        <h4>City: {data.address.city}</h4>
                    </li>
    }
    
    return(
       <ul>
           {data && createList(data)}
        </ul> 
    )
}

export default UList;