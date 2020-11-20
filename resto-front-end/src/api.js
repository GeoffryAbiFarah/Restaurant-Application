
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

//visited API CALL
export const fetchData = async () => {
    try {
        const response = await fetch("/restaurants");
        const data = await response.json();
        return data;
    }
    catch(e) {
        console.log(e)
    }
}

