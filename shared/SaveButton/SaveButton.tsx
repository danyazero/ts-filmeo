'use client'
import React, {FC} from 'react';
import {ISaveButton} from ".//SaveButton.interface";
import st from ".//SaveButton.module.scss"
import Image from "next/image";

export const SaveButton: FC<ISaveButton> = (props) => {
 return (
  <>
    <div className={st.saveButton} onClick={props.onClick}>
        <Image className={st.icon} src={'/saved.svg'} alt={"saved"} width={25} height={25}/>
        <p>Save</p>
    </div>
  </>
 );
}
