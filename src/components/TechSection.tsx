import {toast} from "react-toastify";
import TechCard from "./TechCard";
import type {TechItem} from "./TechCard";
import YourStackSidebar from "./YourStackSidebar";
import { useEffect, useState } from "react";


export function TechSection(){
    const [technologies, setTechnologies]= useState<TechItem[]>([]);
    const [stack, setStack]= useState<TechItem[]>([]);
    const [loading, setLoading]=useState<boolean>(true);

    useEffect(()=>{
        fetch("/technologies.json")
        .then((res)=>res)
        .then((data)=>{
            setTechnologies(data);
            setLoading(false);
        })
        .catch(()=>{
            toast.error("Failed to load technologies.");

        })
    });
}