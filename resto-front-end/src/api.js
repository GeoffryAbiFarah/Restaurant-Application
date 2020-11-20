
//visited
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