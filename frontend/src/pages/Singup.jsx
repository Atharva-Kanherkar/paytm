import { Input } from "postcss"
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/SubmitButton"
import { BottomWarning } from "../components/BottomWarning"



export const SignUp = ()=>{
    return (
        <div>
            <Heading label={"Sign up"}/>
            <SubHeading label={"Enter your information to create an account"}/>
            <InputBox placeholder={"deded"} label={"First Name"}></InputBox>
            <InputBox placeholder={"dsdsd"} label={"Last Name"}></InputBox>
            <InputBox placeholder={"sdsds"} label={"Email"}></InputBox>
            <InputBox placeholder={"sdsd"} label={"Password"}></InputBox>
            <Button label={"Sign Up"}/>
            <BottomWarning label={"Already have an account?"} to={"/signin"} buttonText={"Signin"}/>
        </div>
    )
}