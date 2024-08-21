import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

export function SignUp(){
    return <div>
        <div className="bg-slate-300 h-screen flex justify-center">
         <div className="flex flex-col mt-20 border-black">
            <div className="rounded-lg bg-white w-96 p-2 h-5/6 px-5 shadow-2xl ">
        <Heading label={"Sign Up"}></Heading>
        <SubHeading label={"Enter your information to create your account"}></SubHeading>
        <InputBox label={"First Name"} placeholder={"Siva"}></InputBox>
        <InputBox label={"Last Name"} placeholder={"Dheeraj"}></InputBox>
        <InputBox label={"Email"} placeholder={"sivadheeraj@gmail.com"}></InputBox>
        <InputBox label={"Password"} placeholder={"123456"}></InputBox>
        <Button label={"Sign Up"}></Button>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign In"} to={"/signIn"}></BottomWarning>
        </div>
        </div>
        </div>
    </div>
}