import React, {FC} from 'react';
import Image from "next/image";

export const AuthButton: FC<{ onClick(): void }> = (props) => {
    return (
        <>
            <Image style={{minWidth: '20px'}} onClick={props.onClick} src={'/auth.svg'} alt={'login/logout'} width={20} height={20}/>
        </>
    );
}