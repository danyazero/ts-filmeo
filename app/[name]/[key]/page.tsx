import React, {FC} from 'react';
import {MoviesGrid} from "@/widgets/MoviesGrid";
import {getWatchList} from "@/app/[name]/[key]/api/getWatchList";
import {element} from "prop-types";
import {Message} from "@/shared/Message/Message";
import {MarkWatchListView} from "@/features/MarkWatchListView";
import {getAllUsers} from "@/app/[name]/api/getAllUsers";
import {getAllWatchListsReq} from "@/app/[name]/[key]/api/getAllWatchLists";

type Props = {
    params: {
        name: string,
        key: string
    }
}

export async function generateMetadata(params: Props) {
    return {
        title: "WatchList | Filmeo"
    }
}

export async function generateStaticParams() {
    const watchLists = await getAllWatchListsReq()

    return watchLists.map((watch) => ({
        name: watch.user,
        key: watch.key
    }))
}

const WatchListPage: FC<Props> = async (props) => {
    const {data, additional} = await getWatchList(props.params.name, props.params.key)
    return (
        <>
            {data && additional.code == 200 ? <>
                <MarkWatchListView id={data.key} name={data.user}/>
                <MoviesGrid header={data.name} params={data.movies.map(element => "id=" + element).join("&")}/>
            </> : <><Message text={additional.text} error={true}/></>}
        </>
    );
}

export default WatchListPage