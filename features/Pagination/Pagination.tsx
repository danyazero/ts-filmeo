import React, {FC} from 'react';
import {IPagination} from "@/features/Pagination/Pagination.interface";
import Link from "next/link";

export const Pagination: FC<IPagination> = (props) => {
    return (
        <div className={"flex flex-row gap-4"}>
            <Link className={"bg-secondaryLight rounded-2xl px-4 py-2 hover:opacity-75 text-white text-2xl"} href={'/search/' + (parseInt(props.page) - 1)}>Previous</Link>
            <Link className={"bg-secondaryLight rounded-2xl px-4 py-2 hover:opacity-75 text-white text-2xl"} href={'/search/' + (parseInt(props.page) + 1)}>Next</Link>
        </div>
    );
}
