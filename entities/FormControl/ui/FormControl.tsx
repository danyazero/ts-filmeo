import React, {FC, ReactNode} from 'react';
import {Message} from "@/shared/Message/Message";

export const FormControl: FC<{error: string[] | undefined, children: ReactNode}> = (props) => {
    return (
        <>
            {props.children}
            {props.error && <Message text={props.error.join(", ")} error={true}/>}
        </>
    );
}