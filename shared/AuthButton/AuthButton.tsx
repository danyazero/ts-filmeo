"use client"
import React, {FC} from 'react';
import Image from "next/image";
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export const AuthButton: FC = () => {

    const {data: session} = useSession()
    const {push} = useRouter()
    function authOption(){
        if (session?.user){
            return () => signOut()
        }
        return () => push('/auth')
    }

    return (
        <>
            <Image style={{maxWidth: '20px', minWidth: '20px'}} onClick={authOption()} src={'/auth.svg'} alt={'login/logout'} width={20} height={20}/>
        </>
    );
}