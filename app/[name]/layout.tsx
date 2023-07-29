import React, {FC} from "react";
import {getUser} from "@/app/[name]/api/getUser";
import {UserGreeting} from "@/entities/UserGreeting";
import Image from "next/image";
import {direction} from "@/Models/Models";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {Message} from "@/shared/Message/Message";
import {getAllUsers} from "@/app/[name]/api/getAllUsers";

export const metadata = {
    title: 'Profile | Filmeo',
    description: 'Watch all the best movies here',
}

export async function generateStaticParams() {
    const users = await getAllUsers()

    return users.map((user) => ({
        name: user.name
    }))
}

const ProfileLayout: FC<{ children: React.ReactNode, params: { name: string } }> = async ({children, params}) => {
    const {data, additional} = await getUser(params.name)
    const session = await getServerSession(authOptions)
    const isCurrentUser = session?.user?.name == params.name

    return (
        <>
            {(session?.user?.name && isCurrentUser) ? <UserGreeting name={session.user.name}/> : <></>}

            {data && additional.code == 200 ? <>

                <div className={"flex flex-row gap-4 items-center py-4"}>
                    <Image className={"w-[50px] h-[50px] rounded-2xl"} src={direction + data.image} alt={data.name}
                           width={50} height={50}/>
                    <div>
                        <h2>{data.name}</h2>
                        <p>{data.email}</p>
                    </div>
                </div>
            </> : <Message text={additional.text} error={true}/>}

            {additional.code == 200 ? children : <></>}
        </>
    )
}

export default ProfileLayout