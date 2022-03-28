import React from "react";
import Heading from "./Heading";
import f12 from './f12.jpg';
import oneplus from './oneplus.jpg';
import {Link} from 'react-router-dom';
import Images from "./Image";
import CounterHook from "./CounterHook";

const mobilesDiv={
    backgroundColor: "white",
    minHeight: "10vh",
}
const liElt={
    display:"inline-block"
}
const imgElt1={
    display:"block",
    width:"300px",
    height:"300px",
    padding:"20px"
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
const zoomImageDims = (e) =>{
    // console.log(e.target.style)
    e.target.style.width="400px"
    e.target.style.height="400px"
  }
  
  const changeImageDims = (e) =>{
    // console.log(e.target.style)
    e.target.style.width="300px"
    e.target.style.height="300px"
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
    }
]
const Mobiles = ()=>{
    const createMobilesList = (MOBILESDATA) =>{
        return MOBILESDATA.map((value,index)=>{
        return(
            <li style={liElt} key={index}>
               <Images src={value.source} alt={value.alt} style={value.style} zoomimg={zoomImageDims} imgchange={changeImageDims}/>
                <Heading heading={value.heading}/>
                <CounterHook bname={value.heading}/>
            </li>
        )})
    }


    return(
        <div style={mobilesDiv}>
            <Heading heading="Mobiles to Check Out" style={headStyle}/>
            <Link to="/mobiles"><button style={{float:"right",fontSize:"20px",marginRight:"20px"}}>View All</button></Link>
            <ul style={{listStyle:"none", textAlign:"left", paddingLeft:"10px", paddingTop:"5px"}}>
               {createMobilesList(MOBILESDATA)}
            </ul>
        </div>
    )
}

export default Mobiles;