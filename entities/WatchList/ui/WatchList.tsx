import React, {FC} from 'react';
import {IWatchList} from "./../model/WatchList.interface'";
import st from "./WatchList.module.scss"
import Image from "next/image";
import Link from "next/link";

export const WatchList: FC<IWatchList> = (props) => {
    return (
        <>
            <Link href={props.link} className={st.watchListContainer}>
                <div className={st.main}>
                    <Image className={st.icon} src={'/watchlist.svg'} alt={'watchlist'} width={35} height={35}/>
                    <h2>{props.name}</h2>
                </div>
                <p>[{props.length}] - {props.views} views</p>
            </Link>
        </>
    );
}