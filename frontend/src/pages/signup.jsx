import { BottomWaring } from "../components/bottomWaring";
import { Buttonsp } from "../components/button";
import { Heading } from "../components/headingComponent";
import { SecondHeading } from "../components/second";
import { SingleInputbox } from "../components/singleInput";

export function Signup(){
    return <div className=" grid  justify-center pt-12">
        <Heading label={"Create Account"}/>
        <SecondHeading label={"Enter your information to create an account"}/>
        <SingleInputbox label={"First Name"} placeholder={"Hemant"} />
        <SingleInputbox label={"Last Name"} placeholder={"kumar"} />
        <SingleInputbox label={"Email"} placeholder={"hemantchaudhary905@gmail.com"} />
        <SingleInputbox label={"Password"} placeholder={"12334433"} /> <br />
        <Buttonsp label={"Create account"} />
        <BottomWaring label={"Already Have account?"} buttonText={"login"} to={"/signin"} />
    </div>
}