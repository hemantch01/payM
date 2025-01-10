import { BottomWaring } from "../components/bottomWaring";
import { Buttonsp } from "../components/button";
import { Heading } from "../components/headingComponent";
import { SecondHeading } from "../components/second";
import { SingleInputbox } from "../components/singleInput";

export function Signin(){
    return <div className=" grid  justify-center pt-12">
        <Heading label={"Login"} />
        <SecondHeading label={"Enter your information to Signin"} />
        <SingleInputbox label={"Email"} placeholder={"hemantchaudhary905@gmail.com"}/>
        <SingleInputbox label={'password'} placeholder={"pass111"}/> <br />
        <Buttonsp label={"Sign in"}/>
        <BottomWaring label={"can't sign in?"} buttonText={"create account"} to={"/signup"}/>
    </div>
}