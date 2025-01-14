import { Suspense } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useRecoilValue } from "recoil"
import { balanceAtom } from "../store/Atoms/balanceAtom"


export const Dashboard = () => {
    const balance = useRecoilValue(balanceAtom);
    return <div>
        <Appbar/>
        <div className="m-8">
            <Balance value={balance} />
         <Suspense fallback={'loading....'}><Users /></Suspense>  
        </div>
    </div>
}