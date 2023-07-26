"use client";
import React, {FC} from 'react';
import {SearchInput} from "@/shared/SearchInput";
import {useRouter} from "next/navigation";
import {searchEngine} from "@/features/Search/model/searchEngine";
import {ISearch} from "@/features/Search/model/Search.interface";
import {useQuery} from "@/features/Search/model/useQuery";
import {SearchGrid} from "@/widgets/SearchGrid";

export const Search: FC<ISearch> = (props) => {

    const router = useRouter()


    function onSearchSubmit(value: string) {
        router.push('/search/1/' + props.genre + '?' + 'q=' + value)
    }

    function clearSearch(){
        router.push('/search/1/' + props.genre)
    }
    const params = searchEngine({
        _page: props.page,
        genre_like: props.genre
    }) + useQuery()

    return (
        <>
            <div>
                <SearchInput onSubmit={onSearchSubmit}/>
                <p className={"text-white"} onClick={clearSearch}>Clear</p>
                <SearchGrid header={"Founded for you"} params={params} pagination={{page: props.page, genre: props.genre}}/>
            </div>
        </>
    );
}
