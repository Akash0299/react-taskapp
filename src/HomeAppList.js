import React from "react";
import Heading from "./Heading";
import oven from './oven.jpg';
import ironbox from './ironbox.jpg';
import washingmachine from './washingmachine.jpg';
import ac from './cruiseairconditioner.jpg';
import Images from "./Image";
import CounterHook from "./CounterHook";

const HomeAppDiv={
    backgroundColor: "white",
    minHeight: "10vh",
}
const imgElt1={
    display:"block",
    width:"300px",
    height:"300px",
    padding:"50px"
}
const imgElt2={
    display:"block",
    width:"300px",
    height:"300px",
    padding:"20px"
}
const headStyle={
    textAlign:"left",
    paddingLeft:"10px",
    paddingTop:"5px"
}

const HOMEAPPDATA=[
    {
        source:washingmachine,
        alt:"Lg Washing Machine",
        style:imgElt1,
        heading:"LG Washing Machine",
    },
    {
        source: oven,
        alt:"Pigeon Oven Toaster and Griller",
        style:imgElt2,
        heading:"Pigeon Oven Toaster and Griller",
    },
    {
        source:ac,
        alt:"Cruise Air Conditioner",
        style:imgElt2,
        heading:"Cruise Air Conditioner",
    },
    {
        source:ironbox,
        alt:"Bajaj Iron Box",
        style:imgElt2,
        heading:"Bajaj Iron Box",
    }
]
const HomeAppList = ()=>{
    const createHomeAppList = (HOMEAPPDATA) =>{
        return HOMEAPPDATA.map((value,index)=>{
        return(
            <li key={index}>
               <Images src={value.source} alt={value.alt} style={value.style}/>
                <Heading heading={value.heading}/>
                <CounterHook bname={value.heading}/>
            </li>
        )})
    }


    return(
        <div style={HomeAppDiv}>
            <Heading heading="Home Appliances to Check Out" style={headStyle}/>
            <ul style={{listStyle:"none", textAlign:"left", paddingLeft:"10px", paddingTop:"5px"}}>
               {createHomeAppList(HOMEAPPDATA)}
            </ul>
        </div>
    )
}

export default HomeAppList;