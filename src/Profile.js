import React,{useState,useEffect} from "react";
import {useParams} from 'react-router-dom'
import UList from './UList'

const Profile = () => {
    const params = useParams();
    const pid = params.pid;
    const [data,setData] = useState();

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${pid}`)
        .then(response => response.json())
        .then(json => setData(json))
    },[])

    return(
        <UList data={data} />
    )
}

export default Profile;