'use client'
import React, {FC} from 'react';
import st from "@/widgets/MoviesRow/MoviesRow.module.scss";
import {useRouter} from "next/navigation";
import {IMoreButton} from "@/shared/moreButton/moreButton.interface";

export const MoreButton: FC<IMoreButton> = (props) => {
    const router = useRouter()

    function moreButtonClicked() {
        router.push(props.link)
    }

 return (
  <>
      <p onClick={moreButtonClicked}>more</p>
  </>
 );
}
