import React, { useEffect, useState } from 'react'

export const mediaQueryes =  {
    desktop: '(min-width : 1224px)',
    tablet: '(max-width: 768px)',
    phone: '(max-width: 576px)',
}

export function useFetch(url){
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(url)
        .then(res =>res.json())
        .then(json => {
            setData(json)
        },
        error  => console.log(error)
        )
    }, [url])
    return data
}
export function useMedia(query){
    const queryToMatch =  mediaQueryes[query] 
    const [matches, setMatches] = useState(window.matchMedia(queryToMatch).matches)

    useEffect(() =>  {
        if (typeof window !== 'object') return;
        if (!window.matchMedia) return;

        const media = window.matchMedia(queryToMatch)
        if(media.matches !== matches) setMatches(media.matches)

        const listener = () => setMatches(media.matches)
        media.addEventListener('change', listener)

        return () => media.removeEventListener('change', listener)

    }, [queryToMatch, matches])
    return  matches
}



