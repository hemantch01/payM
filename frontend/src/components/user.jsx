import { Buttonsp } from "./button"

export const User = ({user})=>{

    return (<div className="flex justify-between pt-2 border-2 rounded-md"> 
            <div className="font-medium text-xl/[17px] pt-2">
                {user.firstName} {user.lastName} 
            </div>
            <Buttonsp label={"Send Money"} />
        </div>)
}