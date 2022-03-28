import React from "react";
import Heading from "./Heading";
import f12 from './f12.jpg';
import oneplus from './oneplus.jpg';
import redmi10 from './redmi10.jpg';
import oppof17 from './oppof17.png';
import Images from "./Image";
import CounterHook from "./CounterHook";

const mobilesDiv={
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

const MOBILESDATA=[
    {
        source:f12,
        alt:"f12",
        style:imgElt1,
        heading:"Samsung F12",
    },
    {
        source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRn0oqQvtK9qwJfYsC8mDfi3LJRWO-UHOczg&usqp=CAU",
        alt:"iphone",
        style:imgElt2,
        heading:"IPhone",
    },
    {
        source:oneplus,
        alt:"Oneplus",
        style:imgElt2,
        heading:"Oneplus 7 Pro",
    },
    {
        source:redmi10,
        alt:"Redmi10",
        style:imgElt2,
        heading:"Redmi 10 Prime",
    },
    {
        source:oppof17,
        alt:"Oppof17",
        style:imgElt2,
        heading:"Oppo f17 Pro",
    }
]
const MobilesList = ()=>{
    const createMobilesList = (MOBILESDATA) =>{
        return MOBILESDATA.map((value,index)=>{
        return(
            <li key={index}>
               <Images src={value.source} alt={value.alt} style={value.style}/>
                <Heading heading={value.heading}/>
                <CounterHook bname={value.heading}/>
            </li>
        )})
    }


    return(
        <div style={mobilesDiv}>
            <Heading heading="Mobiles to Check Out" style={headStyle}/>
            <ul style={{listStyle:"none", textAlign:"left", paddingLeft:"10px", paddingTop:"5px"}}>
               {createMobilesList(MOBILESDATA)}
            </ul>
        </div>
    )
}

export default MobilesList;