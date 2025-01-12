import { Link } from "react-router-dom";

export const BottomWaring = ({label, buttonText, to})=>
{
    return <div className="py-2 text-sm flex justify-center">
        <div>
            {label}
        </div>
        <Link className="pointer underline pl-1 curson-pointer" to={to}>
        {buttonText}</Link>
    </div>
}