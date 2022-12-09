export function inflateForest (categories) {
    let sorted = [...categories].sort((a, b) => (a.category > b.category) ? 1 : -1);
    for (let outer =  sorted.length -1; outer >= 0; outer--) {
        sorted[outer].path = sorted[outer].category; //keep flattened path in separate field
        if(sorted[outer].category.includes(',')){
            // for each element search for matching parent
            for(let inner = outer-1; inner > 0; inner--){
                // e.g.'workshop,tips' starts with 'workshop'
                if(sorted[outer].category.startsWith(sorted[inner].category)){
                    let child = sorted[outer];
                    // remove flattened parent information
                    child.category = child.category.split(',').pop();
                    if('children' in sorted[inner]){
                         sorted[inner].children = [ ...sorted[inner].children, child] ;
                    }else{
                        sorted[inner].children = [child];
                    }
                    sorted[inner].count += child.count; // account for total count in parent
                    sorted.splice(outer, 1);
                    break; // found parent
                }
            }
        }
    }
    return sorted;
}

export function generateTagUniqueColor(userString, alpha) {
    // From: https://stackoverflow.com/a/66494926 by Aslam
    let stringUniqueHash = [...userString].reduce((acc, char) => {
        return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    return `hsla(${stringUniqueHash % 360}, 95%, 35%,${alpha})`;
}
