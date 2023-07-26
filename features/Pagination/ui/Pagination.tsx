'use client'
import React, {FC} from 'react';
import {IPagination} from "@/features/Pagination/model/Pagination.interface";
import st from "./Pagination.module.scss"
import Link from "next/link";
import {useQuery} from "@/features/Search/model/useQuery";

export const Pagination: FC<IPagination> = (props) => {
    const searchParams = useQuery()
    const next = parseInt(props.params.page) + 1
    const prev = parseInt(props.params.page) - 1

    return (
        <div className={st.pagination}>
            <Link className={st.paginationButton + (prev <= 0 ? " " + st.disabled : "")} href={'/search/' + prev + '/' + props.params.genre + searchParams}>Previous</Link>
            <Link className={st.paginationButton} href={'/search/' + next + '/' + props.params.genre + searchParams}>Next</Link>
        </div>
    );
}
