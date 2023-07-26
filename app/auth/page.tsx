"use client"
import st from "./Auth.module.css"
import {AuthorizationForm} from "@/widgets/AuthorizationForm";
import {useState} from "react";
import {RegistrationForm} from "@/widgets/RegistrationForm";
const AuthPage = () => {
    const [status, setStatus] = useState(false)

    return (
        <>
            <div className={st.auth}>
                <div>
                    <p onClick={() => setStatus(true)} className={status ? st.active : ""}>Login</p>
                    <p onClick={() => setStatus(false)} className={!status ? st.active : ""}>Register</p>
                </div>
                {status ? <AuthorizationForm/> : <RegistrationForm/>}
            </div>
        </>
    );
}

export default AuthPage;