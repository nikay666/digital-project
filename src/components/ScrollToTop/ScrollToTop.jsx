import { useEffect } from 'react'
import { useLocation } from 'react-router'

const ScrollToTop = (props, top=false) => {
    const pathname = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        console.log(pathname)
    }, [pathname])

    top && window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    return props.children
}

export default ScrollToTop
