'use client'
import React, {FC} from 'react';
import st from "./SaveButton.module.scss"
import {CreateWatchList} from "@/features/CreateWatchList";
import {useSession} from "next-auth/react";
import useSWR from "swr";
import {getSaveWatchLists} from "@/features/SaveButton/api/getSaveWatchLists";
import {usePathname} from "next/navigation";
import {saveMovieInto} from "@/features/SaveButton/api/saveMovieInto";
import {Dropdown} from "@/shared/Dropdown";
import {Button} from "@/shared/Button/Button";
import Image from "next/image";

export const SaveButton: FC = () => {
    const {data: session} = useSession()
    const movieId = usePathname().split("/")[2]
    const {data} = useSWR(session?.user?.name, getSaveWatchLists)

    async function addToWatchListHandler(key: string, name: string){
        const response = await saveMovieInto(name, key, parseInt(movieId))
        console.log(response.additional)
    }


    return (
        <>
            <Dropdown allowed={!!session?.user} element={<div className={st.saveButton}><Image className={st.icon} src={'/saved.svg'} alt={"saved"} width={25} height={25}/> <p>Save</p></div> }>
            {session && session.user?.name && data && data.data ? data.data.map((element, index) => <div
                onClick={() => addToWatchListHandler(element.key, element.user)}
                key={"watchlist_item_" + element.key} id={element.key}
                className={st.item}>{element.name}</div>) : <></>}
            {session?.user?.name ? <CreateWatchList id={movieId}/> : <></>}
        </Dropdown>
        </>
    );

}
