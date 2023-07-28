import React, {FC} from 'react';
import st from "./MovieView.module.scss";
import {IFilm} from "@/Models/Models";
import {HotCard} from "@/entities/HotCard";
import {FilmData} from "@/entities/FilmData";
import {RowCards} from "@/shared/RowCards";
import {Button} from "@/shared/Button/Button";
export const MovieView: FC<IFilm> = async (props) => {
    return (
        <>
            <div className={st.container}>
                <div className={st.video}>
                    <iframe width={900} className={"max-w-full"} height={450} src={props.trailer + "?rel=0&border=0"}
                            allowFullScreen={false}/>
                </div>
                <HotCard>
                    <FilmData views={props.views} caption={props.caption} name={props.name} year={props.year} country={props.country}
                              genre={props.genre} runtime={props.runtime} rating={props.rating}/>
                </HotCard>
            </div>
            <RowCards>
                {props.genre.map((element, index) => <Button link={'/search/1/' + element.toLowerCase()} title={element}/>)}
            </RowCards>
        </>
    );
}