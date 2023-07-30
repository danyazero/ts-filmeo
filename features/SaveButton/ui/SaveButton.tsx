'use client'
import React, {FC, useEffect, useState} from 'react';
import {ISaveButton} from "../model/SaveButton.interface";
import st from "./SaveButton.module.scss"
import Image from "next/image";
import {CreateWatchList} from "@/features/CreateWatchList";
import {useSession} from "next-auth/react";
import {IWatchList} from "@/app/[name]/model/User.interface";
import useSWR from "swr";
import {getSaveWatchLists} from "@/features/SaveButton/api/getSaveWatchLists";
import {usePathname} from "next/navigation";
import {saveMovieInto} from "@/features/SaveButton/api/saveMovieInto";

export const SaveButton: FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const {data: session} = useSession()
    const movieId = usePathname().split("/")[2]
    const {data} = useSWR(session?.user?.name, getSaveWatchLists)

    async function addToWatchListHandler(key: string, name: string){
        const response = await saveMovieInto(name, key, parseInt(movieId))
        console.log(response.additional)
    }

    return (
        <div className={st.container}>
            <button className={st.saveButton} disabled={!session?.user} onClick={() => {
                if (session?.user) setOpen(prevState => !prevState)
            }}>
                <Image className={st.icon} src={'/saved.svg'} alt={"saved"} width={25} height={25}/>
                <p>Save</p>
            </button>

            <div className={st.dropdownList + (open ? " " + st.active : "")}>
                {session && session.user?.name && data && data.data ? data.data.map((element, index) => <div
                    onClick={() => addToWatchListHandler(element.key, element.user)}
                    key={"watchlist_item_" + element.key} id={element.key}
                    className={st.item}>{element.name}</div>) : <></>}
                {session?.user?.name ? <CreateWatchList id={movieId}/> : <></>}
            </div>
        </div>
    );

}
