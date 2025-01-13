import { useRecoilValue, useRecoilState } from "recoil";
import { SingleInputbox } from "./singleInput";
import { userSelector } from "../store/Atoms/userAtom";
import { filterAtom } from "../store/Atoms/filterAtom";
import { User } from "./user";

export const Users = () => {
    const users = useRecoilValue(userSelector); 
    console.log(users)// Get filtered users from the selector
    const [userFilter, setFilter] = useRecoilState(filterAtom); // Manage the search filter

    return (
        <div>
            <div className="font-semibold">Users</div>
            <SingleInputbox
                onChange={(e) => setFilter(e.target.value)} // Update the filter atom
                onlabel={"Search Users"}
                placeholder={"e.g., Hemant Kumar (partial name allowed)"}
            />
            <div className="py-3">
                {users.length > 0 ? (
                    users.map((user) => <User key={user._id} user={user} />)
                ) : (
                    <div>No users found.</div>
                )}
            </div>
        </div>
    );
};