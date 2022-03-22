import React,{ useEffect, useState } from "react";

//api
import { getPopular } from "../services/api";

const Popular = () => {
    const [data, setData] = useState([])
    console.log(data)
    useEffect(() => {
        const fetchApi = async () => {
            setData(await getPopular())
        }
        
        return fetchApi()
    }, [])
    
  return <div>Popular</div>;
};

export default Popular;
