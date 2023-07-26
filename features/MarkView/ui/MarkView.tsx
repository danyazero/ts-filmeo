"use client"
import React, {FC, useEffect} from 'react';
import {markViewReq} from "@/features/MarkView/api/markView";

export const MarkView: FC<{id: string}> = async (props) => {
    useEffect(() => {
        const response = markViewReq(props.id)
    }, [])
    return (
        <>
        </>
    );
}