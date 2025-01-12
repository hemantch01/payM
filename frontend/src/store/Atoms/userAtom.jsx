import axios from "axios";
import { atom, selector } from "recoil";

export const userSelector = selector({
    key:"asyncUser"
    ,get: async()=>{
        const response = await axios("http://localhost:3000/api/v1/user/bulk");
        console.log(response.data);
        return response.data;
    }
});
export const userAtom = atom({
    key: 'userAtom',
    default: userSelector
})