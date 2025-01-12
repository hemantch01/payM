import { Buttonsp } from "./button"
import { SingleInputbox } from "./singleInput"

export const Users = ()=>{
    return <div>
        <div className="font-semibold">Users</div>
        <SingleInputbox label={"Search Users"} placeholder={"eg.Hemant kumar (you don't need to type full name)"} />
       <div className="py-3">
        <div className="flex justify-between pt-2 border-2 rounded-md"> 
            <div className="font-medium text-xl/[17px] pt-2">
                Hemant Kumar
            </div>
            <Buttonsp label={"Send Money"} />
        </div>
        </div>
    </div>
}