import {useQuery} from '@tanstack/react-query';

async function fetchData (url:string){
    console.log('fetch happen')
    const response=await fetch(url);
    const data=await response.json();
    return data;
}

export default function useFetchData(url:string,key:string){
    return useQuery({
        queryKey:[key],
        queryFn:()=>fetchData(url),
        staleTime:5*60*1000
    })
}