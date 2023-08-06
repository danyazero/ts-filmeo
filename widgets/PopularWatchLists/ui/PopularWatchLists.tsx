import React from 'react';
import {VerticalCards} from "@/shared/VerticalCards";
import {getPopularWatchLists} from "@/widgets/PopularWatchLists/api/getPopularWatchLists";
import {WatchList} from "@/entities/WatchList";
import {myDirection} from "@/Models/Models";

export const PopularWatchLists = async () => {
    const {data, additional} = await getPopularWatchLists()
    return (
        <>
            <h2>Popular WatchLists</h2>
            <VerticalCards>
                {data && data.map((element, index) => <WatchList name={element.name} length={element.movies.length} link={myDirection + "/" + element.user + "/" + element.key} views={element.views}/>)}
            </VerticalCards>
        </>
    );
}