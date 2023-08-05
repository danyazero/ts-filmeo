import React, {FC, ReactNode, useState} from 'react';
import st from "./Dropdown.module.scss";
import Image from "next/image";

export const Dropdown: FC<{allowed: boolean, children: ReactNode[], element: ReactNode}> = (props) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
            <div className={st.container}>
                <div onClick={() => {
                    if (props.allowed) setOpen(prevState => !prevState)
                }}>
                    {props.element}
                </div>

                <div className={st.dropdownList + (open ? " " + st.active : "")}>
                    {props.children}
                </div>
            </div>
        </>
    );
}