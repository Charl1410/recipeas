import axios from "axios";
//api url
const apiUrl = "https://dummyjson.com/recipes"; 

//function to fetch the data 
export async function getRecipes() {
    try {
        //await is where the code pauses until the promise is resolved
        const response = await axios.get(apiUrl); //returns a promise and function is paused until the promise is resolved
        return response.data.recipes;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

