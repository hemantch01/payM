import { useNavigate } from "react-router-dom"
import { Buttonsp } from "./button"


export const User = ({user})=>{
    const navigate = useNavigate();
    return (<div className="flex justify-between pt-2 border-2 rounded-md"> 
            <div className="font-medium text-xl/[17px] pt-2">
                {user.firstName} {user.lastName} 
            </div>
            <Buttonsp onClick={()=>{navigate("/transfer?id="+user._id+"&name="+user.firstName+" "+user.lastName)}} label={"Send Money"} />
        </div>)
}