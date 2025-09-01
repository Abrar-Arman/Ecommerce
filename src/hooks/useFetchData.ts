import {useQuery} from '@tanstack/react-query';

async function fetchData (url:string){
    const response=await fetch(url);
    const data=await response.json();
    return data;
}

export default function useFetchData(url:string){
    return useQuery({
        queryKey:['category'],
        queryFn:()=>fetchData(url)
    })
}