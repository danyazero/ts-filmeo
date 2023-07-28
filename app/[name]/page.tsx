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

type Props = {
    params: {
        name: string,
    }
}

export async function generateMetadata(params: Props){

    return{
        title: "Profile | Filmeo"
    }
}

export async function generateStaticParams() {
    const users = await getAllUsers()

    return users.map((user) => ({
        name: user.name
    }))
}

const UserProfilePage: FC<Props> = async (props) => {

    const {data, additional} = await getUser(props.params.name)
    const session = await getServerSession(authOptions)
    const isCurrentUser = session?.user?.name == props.params.name

    return (
        <>
            {(session?.user?.name && isCurrentUser) ? <UserGreeting name={session.user.name}/> : <></>}

            {data && additional.code == 200 ? <>

                <div className={"flex flex-row gap-4 items-center py-4"}>
                    <Image className={"w-[50px] h-[50px] rounded-2xl"} src={direction + data.user.image} alt={data.user.name} width={50} height={50}/>
                    <div>
                        <h2>{data.user.name}</h2>
                        <p>{data.user.email}</p>
                    </div>
                </div>



                {data.watchLists ? data.watchLists.map((element, index) => <WatchList key={'watchlist_'+index} views={element.views} name={element.name} length={element.movies.length} link={'/' + element.user + '/' + element.key}/>) : <></>}

            </> : <>
            <Message text={additional.text} error={true}/>
            </>}
        </>
    );
}

export default UserProfilePage;