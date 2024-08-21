import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

export function SignIn(){
    return <div>
        <div className="bg-slate-300 h-screen flex justify-center">
         <div className="flex flex-col mt-32 border-black">
            <div className="rounded-lg bg-white w-96 p-2 h-96 px-5 shadow-2xl ">
        <Heading label={"Sign In"}></Heading>
        <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
        <InputBox label={"Email"} placeholder={"sivadheeraj@gmail.com"}></InputBox>
        <InputBox label={"Password"} placeholder={"123456"}></InputBox>
        <Button label={"Sign In"}></Button>
        <BottomWarning label={"Dont have an account?"} buttonText={"Sign Up"} to={"/signUp"}></BottomWarning>
        </div>
        </div>
        </div>
    </div>
}