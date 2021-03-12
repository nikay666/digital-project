import SliderCol from "./SliderCol"
import SliderGallery from "./SliderGallery"
import SliderList from "./SliderList"

export const sliderTemplates = {
    col: SliderCol,
    list: SliderList,
    gallery: SliderGallery,
}


export const getGroups = (type, slides, count ) =>  {
    let groups = []
    if(type === 'gallery'){
        groups = slides.reduce((acc,c,i) => {
            if ((i % count) === 0) acc.push([]);
            acc[acc.length - 1].push(c);
            return acc;
        }, [])
    }else{ 
        groups = slides
    }
    return groups
}
