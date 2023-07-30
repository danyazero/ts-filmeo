import React, {FC} from 'react';
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import {AuthButton} from "@/shared/AuthButton/AuthButton";
import {signOut} from "next-auth/react";
import {UserGreeting} from "@/entities/UserGreeting";
import {getUser} from "@/app/[name]/api/getUser";
import {Message} from "@/shared/Message/Message";
import {element} from "prop-types";
import {WatchList} from "@/entities/WatchList";
import {direction, IFilm} from "@/Models/Models";
import {getAllMovies} from "@/Models/api/service";
import {getAllUsers} from "@/app/[name]/api/getAllUsers";
import {CreateWatchList} from "@/features/CreateWatchList";
import {getWatchLists} from "@/app/[name]/api/getWatchLists";
import {getAllWatchListsReq} from "@/app/[name]/[key]/api/getAllWatchLists";

type Props = {
    params: {
        name: string,
    }
}

export async function generateStaticParams() {
    const users = await getAllWatchListsReq()

    return users.map((user) => ({
        name: user.user
    }))
}

const UserProfilePage: FC<Props> = async (props) => {

    const {data, additional} = await getWatchLists(props.params.name)
    const session = await getServerSession(authOptions)
    const isCurrentUser = session?.user?.name == props.params.name

    return (
        <>
            {data && additional.code == 200 ? <>
                {data ? data.map((element, index) => <WatchList key={'watchlist_'+index} views={element.views} name={element.name} length={element.movies.length} link={'/' + element.user + '/' + element.key}/>) : <></>}

            </> : <>
            <Message text={additional.text} error={true}/>
            </>}
        </>
    );
}

export default UserProfilePage;