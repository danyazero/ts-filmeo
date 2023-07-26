'use client'
import React, {FC} from 'react';
import {SaveButton} from "@/shared/SaveButton";
import {usePathname} from "next/navigation";

export const SaveMovie: FC = () => {
    const movieId = usePathname().split("/")[2]
    function saveMovie(){
        alert("Saved! " + movieId)
    }
 return (
  <>
    <SaveButton onClick={saveMovie}/>
  </>
 );
}
