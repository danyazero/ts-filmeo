'use client'
import React, {FC} from 'react';
import st from "@/widgets/MoviesRow/MoviesRow.module.scss";
import {useRouter} from "next/navigation";
import {IMoreButton} from "@/shared/moreButton/moreButton.interface";

export const MoreButton: FC<IMoreButton> = (props) => {
    const router = useRouter()

    function moreButtonClicked() {
        router.push('/search/1/' + props.category)
    }

 return (
  <>
      <p className={st.moreButton} onClick={moreButtonClicked}>more</p>
  </>
 );
}
