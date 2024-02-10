import { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/SubmitButton";
import { BottomWarning } from "../components/BottomWarning";

export const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your information to create an account"} />
            <InputBox
                placeholder={"Enter your first name"}
                label={"First Name"}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <InputBox
                placeholder={"Enter your last name"}
                label={"Last Name"}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <InputBox
                type={"email"}
                placeholder={"Enter your email"}
                label={"Email"}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <InputBox
                type={"password"}
                placeholder={"Enter your password"}
                label={"Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button  onClick={()=>{{
                axios.post("http://localhost:3000/api/v1/user/signup", {
                     username,
                     firstName,
                     lastName,
                     password
                })
            }}} label={"Sign Up"} />
            <BottomWarning label={"Already have an account?"} to={"/signin"} buttonText={"Sign in"} />
        </div>
    );
};
