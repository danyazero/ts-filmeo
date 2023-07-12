'use client'
import React, {FC} from 'react';
import {IButton} from "@/shared/Button/Button.interface";
import st from ".//Button.module.css";
import {useRouter} from "next/navigation";

export const Button: FC<IButton> = (props) => {

    const {push} = useRouter()
    function onButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()
        props.link && push(props.link)
    }

    return (
        <>
            <button className={st.button} onClick={onButtonClick} type={props.link ? "button" : "submit"}>
                {props.children} {props.title}
            </button>
        </>
    );
}