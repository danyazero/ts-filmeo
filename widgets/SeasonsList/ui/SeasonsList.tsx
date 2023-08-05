import React, {FC, useState} from 'react';
import {SeasonDropdown} from "@/shared/SeasonDropdown/ui/SeasonDropdown";
import {getMovieSeasons} from "@/widgets/SeasonsList/api/getMovieSeasons";
import st from "./SeasonsList.module.scss"
import {getSeparatedSeasons} from "@/widgets/SeasonsList/model/getSeparetedSeasons";
import {EpisodeItem} from "@/entities/EpisodeItem";
import {SeasonsContainer} from "@/entities/SeasonsContainer";

export const SeasonsList: FC<{ id: string }> = async (props) => {

    const {data, additional} = await getMovieSeasons(props.id)


    if (additional.code == 200 && data) {
        const seasons = getSeparatedSeasons(data)
        const keys = Object.keys(seasons)

        return (
            <>
                {/*.slice(0, Math.min(4*pages, 4*page))*/}
                <div className={st.container}>
                    <h2 className={st.header}>Series Episodes ({data.length})</h2>
                    <SeasonsContainer>
                        {keys.map((key, kIndex) => <SeasonDropdown key={"season_" + kIndex}
                                                                   title={key}>{seasons[key].map((element, index) =>
                            <EpisodeItem key={"episode_" + index} name={element.name} date={element.date}
                                         rating={element.rating}/>)}</SeasonDropdown>)}
                    </SeasonsContainer>
                </div>
            </>
        );
    }

    return (
        <></>
    )
}