import { selector } from 'recoil';
import axios from 'axios';
export const balanceAtom = selector({
    key: 'balanceAtom',
    get:async ()=>{
        const response = await axios.get('http://localhost:3000/api/v1/account/balance',{
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        });
        console.log(response.data);
        return response.data.balance;
    }
})