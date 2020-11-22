
//all restaurants API CALL
export const fetchDataAll = async () => {
    try {
        const resp = await fetch("/restaurants");
        const data = await resp.json();
        return data;
    }
    catch(e) {
        console.log(e)
    }
}

//Searched restaurants by name and type API CALL
// "/restaurant-by-name-and-type"
export const fetchDataSearch = async (param) => {
    try {
        let nameArray = param.name.split(" ");
        let nameParam = nameArray.join("+");
        let typeParam = param.type;
        const resp = await fetch(`/restaurant-by-name-and-type?name=${nameParam}&type=${typeParam}`);
        const data = await resp.json();
        console.log(resp)
        return data;
    }
    catch(e) {
        console.log(e)
    }
}


export const fetchDataSearchName = async (param) => {
    try {
        let nameArray = param.name.split(" ");
        let nameParam = nameArray.join("+");
        const resp = await fetch(`/restaurant-by-name?name=${nameParam}`);
        const data = await resp.json();
        console.log(resp)
        return data;
    }
    catch(e) {
        console.log(e)
    }
}

export const fetchDataSearchType = async (param) => {
    try {
        let typeParam = param.type;
        const resp = await fetch(`/restaurant-by-type?type=${typeParam}`);
        const data = await resp.json();
        console.log(resp)
        return data;
    }
    catch(e) {
        console.log(e)
    }
}




//visited API CALL
export const fetchData = async () => {
    try {
        const response = await fetch("/visited-restaurants");
        const data = await response.json();
        return data;
    }
    catch(e) {
        console.log(e)
    }
}

//post visited restorant
export const postVisited = async (restaurant) => {
    try{

        fetch("/add-visited-restaurant",{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(restaurant)
        })

    }catch(e){
        console.log(e)
    }
}