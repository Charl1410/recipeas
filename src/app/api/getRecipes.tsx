import axios from "axios";
//api url
const apiUrl = "https://dummyjson.com/recipes";

//function to fetch the data 
export async function getRecipes() {
    try {
        const response= await axios.get(apiUrl);
        // console.log("api res" + response.data.recipes)
        return response.data.recipes;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }

}