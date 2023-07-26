'use client'
import React, {FC, useEffect} from 'react';
import {ISaveHistory} from "@/features/SaveHistory/model/SaveHistory.interface";
import {addElementToSizedArray} from "@/features/SaveHistory/model/addElementToSizedArray";


export const SaveHistory: FC<ISaveHistory> = (props) => {
    const key = "history"
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(addElementToSizedArray(JSON.parse(localStorage.getItem(key) || "[]"), props.movieId.toString(), 9)));

    }, []);
    return (
        <></>
    );
}
