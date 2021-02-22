import SliderCol from "./SliderCol"
import SliderGallery from "./SliderGallery"
import SliderList from "./SliderList"

const  NUM_IMG_IN_GAL = 10
const NUM_IMG_IN_GAL_MD = 8
const NUM_IMG_IN_GAL_SM = 2

// const mediaQueryList = window.matchMedia('(max-width: 992px)');
let md = window.matchMedia('(max-width: 768px)');
let sm = window.matchMedia('(max-width: 576px)');

const getCountItems = (e) =>{ 
    if(e.matches === sm){
        return NUM_IMG_IN_GAL_SM
    }else if(e.matches === md){
        return NUM_IMG_IN_GAL_MD
    } else   return NUM_IMG_IN_GAL
}
sm.addEventListener('change', getCountItems)

export const sliderTemplates = {
    col: SliderCol,
    list: SliderList,
    gallery: SliderGallery,
}


export const getGroups = (type, slides ) =>  {
    let groups = []
    if(type === 'gallery'){
        groups = slides.reduce((acc,c,i) => {
            if ((i % NUM_IMG_IN_GAL) === 0) acc.push([]);
            acc[acc.length - 1].push(c);
            return acc;
        }, [])
    }else{ 
        groups = slides
    }
    return groups
}
