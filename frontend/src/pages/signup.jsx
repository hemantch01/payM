import { useRecoilState } from "recoil";
import { BottomWaring } from "../components/bottomWaring";
import { Buttonsp } from "../components/button";
import { Heading } from "../components/headingComponent";
import { SecondHeading } from "../components/second";
import { SingleInputbox } from "../components/singleInput";
import { emailAtom, firstNameAtom, lastNameAtom, passwordAtom } from "../store/Atoms/signinAtoms";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup(){
    const [ firstName, setfirstName] = useRecoilState(firstNameAtom);
    const [lastName, setLastName] = useRecoilState(lastNameAtom);
    const [username, setEmail] = useRecoilState(emailAtom);
    const [password, setPassword] = useRecoilState(passwordAtom);
    const navigate = useNavigate();
    return <div className="flex justify-center pt-8 ">
        <div></div>
    <div className=" border-sky-900 p-8 pt-5  " >
        <Heading label={"Create Account"}/>
        <SecondHeading label={"Enter your information to create an account"}/>
        <SingleInputbox onChange={(e) =>{ console.log(e.target.value); setfirstName(e.target.value);}} label={"First Name"} placeholder={"Hemant"} />
        <SingleInputbox onChange={(e) =>{setLastName(e.target.value);}} label={"Last Name"} placeholder={"kumar"} />
        <SingleInputbox onChange={(e) =>{setEmail(e.target.value);}} label={"Email"} placeholder={"hemantchaudhary905@gmail.com"} />
        <SingleInputbox onChange={(e) =>{setPassword(e.target.value);}} label={"Password"} placeholder={"12334433"} /> <br />
        <Buttonsp onClick={async ()=>{
            const respose = await axios.post('http://localhost:3000/api/v1/user/signup',
                {
                    username,
                    firstName,
                    lastName,
                    password
                }); localStorage.setItem('token', respose.data.token); navigate('/dashboard');
        }} label={"Create account"} />
        <BottomWaring label={"Already Have account?"} buttonText={"login"} to={"/signin"} />
    </div>
    <div></div>
    </div> 
}