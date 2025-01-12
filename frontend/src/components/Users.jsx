import { useRecoilValue } from "recoil"
import { SingleInputbox } from "./singleInput"
import {userAtom} from '../store/Atoms/userAtom'
import { User } from "./user"
export const Users = ()=>{
    const users = useRecoilValue(userAtom);
    console.log(users)
    return <div>
        <div className="font-semibold">Users</div>
        <SingleInputbox label={"Search Users"} placeholder={"eg.Hemant kumar (you don't need to type full name)"} />
        <div className="py-3">
                {users.user.map((user) => (
                    <User key={user._id} user={user} />
                ))}
            </div>
    </div>
}