import { atom, selector } from "recoil";
import axios from "axios";
import { filterAtom } from "./filterAtom";



export const userSelector = selector({
    key: "userSelector",
    get: async ({ get }) => {
        const filter = get(filterAtom); 
        console.log('filter is'+filter);// Access the search filter
        
            const response = await axios.get(`http://localhost:3000/api/v1/user/bulk/?filter=${filter}`);
            console.log(response.data.user);
            return response.data.user; // Assume this returns an array of users
        
    },
});

export const userAtom = atom({
    key: "userAtom",
    default: [], // Initialize with an empty array
});