import { useRecoilState } from "recoil";
import { BottomWaring } from "../components/bottomWaring";
import { Buttonsp } from "../components/button";
import { Heading } from "../components/headingComponent";
import { SecondHeading } from "../components/second";
import { SingleInputbox } from "../components/singleInput";
import { emailAtom, passwordAtom } from "../store/Atoms/signinAtoms";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Signin(){
    const navigate = useNavigate();
    const [username, setEmail] = useRecoilState(emailAtom);
    const [password, setPassword] = useRecoilState(passwordAtom);
    return <div className=" grid  justify-center pt-12">
        <Heading label={"Login"} />
        <SecondHeading  label={"Enter your information to Signin"} />
        <SingleInputbox onChange={(e)=>{setEmail(e.target.value)}} label={"Email"} placeholder={"hemantchaudhary905@gmail.com"}/>
        <SingleInputbox onChange={(e)=>{setPassword(e.target.value);}} label={'password'} placeholder={"pass111"}/> <br />
        <Buttonsp onClick={async ()=>{ const res = await axios.post("http://localhost:3000/api/v1/user/signin",{username,password}); localStorage.setItem('token',`Bearer ${res.data.token}`);navigate('/dashboard')}} label={"Sign in"}/>
        <BottomWaring label={"can't sign in?"} buttonText={"create account"} to={"/signup"}/>
    </div>
}