"use client";
import React, {FC, useState} from 'react';
import st from "./SearchInput.module.scss"
import {ISearchInput} from "@/shared/SearchInput/model/SearchInput.interface";
import Image from "next/image";

export const SearchInput: FC<ISearchInput> = (props) => {
    const [search, setSearch] = useState("")

    function onSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        props.onSubmit(search)
        setSearch("")
    }
    return (
        <form onSubmit={onSubmit} className={st.search}>
            <input className={st.searchInput} value={search}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
                   placeholder={"Search"} type={"search"}/>
            <button type="submit" className={st.searchButton}>
                <Image className={st.searchIcon} src={"/search.svg"} alt={"search"} width={20} height={20}/>
            </button>
        </form>
    );
}
