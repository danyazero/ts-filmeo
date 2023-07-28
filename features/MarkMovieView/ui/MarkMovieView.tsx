"use client"
import React, {FC, useEffect} from 'react';
import {MarkMovieViewReq} from "@/features/MarkMovieView/api/MarkMovieView";

export const MarkMovieView: FC<{id: string}> = async (props) => {
    useEffect(() => {
        const response = MarkMovieViewReq(props.id)
    }, [])
    return (
        <>
        </>
    );
}