import React, {FC} from 'react';
import st from "./Message.module.scss"

export const Message: FC<{text: string, error: boolean}> = (props) => {
    return (
        <>
            <div className={st.message + (props.error ? " " + st.error : "")}>
                {props.text}
            </div>
        </>
    );
}