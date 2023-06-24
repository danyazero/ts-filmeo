"use client";
import React, {FC} from 'react';
import Image from "next/image";
import st from ".//BackButton.module.scss"
import {useRouter} from "next/navigation";

export const BackButton: FC = (props) => {

    const router = useRouter()

 return (
  <>
    <div onClick={() => router.back()} className={st.backButton}>
        <Image className={st.icon} src={"/back.svg"} alt={"go back"} width={20} height={20} priority={true}/>
        <p>Go back</p>
    </div>
  </>
 );
}
