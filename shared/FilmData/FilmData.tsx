import React, {FC} from 'react';
import st from ".//FilmData.module.scss"
import {Rating} from "@/shared/Rating/Rating";
import {IFilmData} from "@/shared/FilmData/FilmData.interface";

export const FilmData: FC<IFilmData> = (props) => {
    return (
        <>
            <h2>{props.name}</h2>
            <table className={st.mainData}>
                <tbody>
                <tr>
                    <td>Year</td>
                    <td>{props.year}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{props.country}</td>
                </tr>
                <tr>
                    <td>Genre</td>
                    <td>{props.genre.join(", ")}</td>
                </tr>
                <tr>
                    <td>Duration</td>
                    <td>{props.runtime} min</td>
                </tr>
                <tr>
                    <td>Rating</td>
                    <td><Rating rating={props.rating}/></td>
                </tr>
                <tr>
                    <td>Caption</td>
                    <td className={st.caption}>{props.caption}</td>
                </tr>
                </tbody>
            </table>
        </>
    );
};