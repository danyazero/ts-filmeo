"use client";
import React, {FC, useState} from 'react';
import {SearchInput} from "@/shared/SearchInput/SearchInput";
import {usePathname} from "next/navigation";
import useSWR from "swr/immutable";
import {getSearchedMovies} from "@/Models/api/service";
import {IFilm} from "@/Models/Models";

export const Search: FC = () => {

    const pathname = usePathname()
    const page = pathname.split("/")[2]
    const {mutate} = useSWR<IFilm[]>({url: "movies", page})
    async function onSearchSubmit(value: string){
        const filteredMovies = await getSearchedMovies(value, '1')
        await mutate(filteredMovies)
    }

    return (
        <>
            <div>
                <SearchInput onSubmit={onSearchSubmit}/>
            </div>
        </>
    );
}
