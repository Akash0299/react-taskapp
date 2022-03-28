import React from "react";
import Heading from "./Heading";
import shirt from "./shirt.jpg";
import handbags from "./handbags.jpg";
import casualshoes from "./mcasualshoes.jpg"
import smartwatch from "./smartwatch.jpg"
import Images from "./Image";
import CounterHook from "./CounterHook";

const FashionDiv={
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

const FASHIONDATA=[
    {
        source:smartwatch,
        alt:"Reebok Smartwatch",
        style:imgElt1,
        heading:"Reebok Smartwatch for Men and Women",
    },
    {
        source: shirt,
        alt:"Diverse Men's Regular Formal Shirt",
        style:imgElt2,
        heading:"Diverse Men's Regular Formal Shirt",
    },
    {
        source:handbags,
        alt:"Fargo Handbag For Women And Girls COMBO SET OF 5 (Light5pc)",
        style:imgElt2,
        heading:"Fargo Handbag For Women And Girls",
    },
    {
        source:casualshoes,
        alt:"Retro Walk Blue Stylish Men Casual Shoes, Size: 6-12",
        style:imgElt2,
        heading:"Retro Walk Blue Stylish Men Casual Shoes",
    }
]
const FashionAccList = ()=>{
    const createFashionList = (FASHIONDATA) =>{
        return FASHIONDATA.map((value,index)=>{
        return(
            <li key={index}>
               <Images src={value.source} alt={value.alt} style={value.style}/>
                <Heading heading={value.heading}/>
                <CounterHook bname={value.heading}/>
            </li>
        )})
    }


    return(
        <div style={FashionDiv}>
            <Heading heading="Fashion Accessories to Check Out" style={headStyle}/>
            <ul style={{listStyle:"none", textAlign:"left", paddingLeft:"10px", paddingTop:"5px"}}>
               {createFashionList(FASHIONDATA)}
            </ul>
        </div>
    )
}

export default FashionAccList;