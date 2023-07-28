import React, {FC} from 'react';
import {IUserGreeting} from "./../model/UserGreeting.interface";
import st from "./UserGreeting.module.scss"
import Image from "next/image";
import {AuthButton} from "@/shared/AuthButton/AuthButton";

export const UserGreeting:FC<IUserGreeting> = (props) => {
    return (
        <>
            <div className={st.userGreetingContainer}>
                <div className={st.helloContainer}>
                    <Image className={st.handWave} src={'/hello.svg'} alt={'hand wave'} width={45} height={45}/>
                    <div className={st.helloTextContainer}>
                        <h2>Hi, there {props.name}!</h2>
                        <p>Thanks for using Filmeo</p>
                    </div>
                </div>
                <AuthButton/>
            </div>
        </>
    );
}