'use client'
import React, {FC} from 'react';
import {useRouter} from "next/navigation";
import {IMoreButton} from "@/shared/moreButton/moreButton.interface";
import st from "./MoreButton.module.scss"

export const MoreButton: FC<IMoreButton> = (props) => {
    const router = useRouter()

    function moreButtonClicked() {
        router.push(props.link)
    }

 return (
  <>
      <p className={st.more} onClick={moreButtonClicked}>more</p>
  </>
 );
}
