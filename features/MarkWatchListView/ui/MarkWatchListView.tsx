"use client"
import React, {FC, useEffect} from 'react';
import {MarkWatchListViewReq} from "@/features/MarkWatchListView/api/MarkWatchListView";

export const MarkWatchListView: FC<{id: string, name: string}> = async ({id, name}) => {
    useEffect(() => {
        console.log({id, name})
        const response = MarkWatchListViewReq(id, name)
    }, [])
    return (
        <>
        </>
    );
}