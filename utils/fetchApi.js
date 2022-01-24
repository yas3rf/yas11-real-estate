import axios from "axios";

export const baseUrl ="https://bayut.p.rapidapi.com";





export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        
        headers:{
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'a41bbda1acmshe46c8ab76438e77p1e7c65jsnde4ee1f5cdba'
        }
    
    })
    return data; 
}
    