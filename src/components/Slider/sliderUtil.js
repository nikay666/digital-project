const  NUM_IMG_IN_GAL = 10

export const getGroups = (type, slides) =>  {
    let groups = []
    if(type === 'gallery'){
        groups = slides.reduce((acc,c,i,arr) => {
            if ((i % NUM_IMG_IN_GAL) === 0) acc.push([]);
            acc[acc.length - 1].push(c);
            return acc;
        }, [])
    }else{ 
        groups = slides
    }
    return groups
}
