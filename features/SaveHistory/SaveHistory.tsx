'use client'
import React, {FC, useEffect, useState} from 'react';
import {ISaveHistory} from "@/features/SaveHistory/SaveHistory.interface";
import {element} from "prop-types";

export const SaveHistory: FC<ISaveHistory> = (props) => {
    const key = "history"
    useEffect(() => {
        let history: string[] = []
        history.push(props.movieId)
        if (localStorage.getItem(key)){
            const prevHistory: string[] = JSON.parse(localStorage.getItem(key))

            if (prevHistory.length > 8){
                history = prevHistory.slice(1).concat(history)
                console.log(history)
            }else {
                history = prevHistory.concat(history)
            }
        }
        localStorage.setItem(key, JSON.stringify(history));

    }, []);
 return (
  <>

  </>
 );
}
