import React, { useEffect, useState } from 'react'

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
    }, [])
    return data
}