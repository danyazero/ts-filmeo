"use client";
import React, {FC, useEffect, useState} from 'react';
import {SearchInput} from "@/shared/SearchInput/SearchInput";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {ISearchParams, searchEngine} from "@/features/Search/utils/searchEngine";
import {MoviesCards} from "@/entities/MoviesCards/MoviesCards";
import {ISearch} from "@/features/Search/Search.interface";
import {useQuery} from "@/features/Search/utils/useQuery";

export const Search: FC<ISearch> = (props) => {

    const router = useRouter()


    async function onSearchSubmit(value: string) {
        router.push('/search/1/' + props.genre + '?' + 'q=' + value)
    }

    return (
        <>
            <div>
                <SearchInput onSubmit={onSearchSubmit}/>
                <MoviesCards header={'Founded for you'} pagination={props} params={searchEngine({
                    _page: props.page,
                    genre_like: props.genre
                }) + useQuery()}/>
            </div>
        </>
    );
}
