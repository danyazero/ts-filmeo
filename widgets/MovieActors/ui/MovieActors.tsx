import React, {FC} from 'react';
import {ActorCard} from "@/entities/ActorCard";
import {RowCards} from "@/shared/RowCards";
import {IActorCard} from "@/entities/ActorCard/ActorCard.interface";
import {getMovieActors} from "@/widgets/MovieActors/api/getMovieActors";
import {IRole} from "@/Models/Models";

export const MovieActors: FC<{roles: IRole[]}> = async (props) => {
    const actors: IActorCard[] = await getMovieActors(props.roles)

    return (
        <>
            <RowCards header={"Cast"}>
                {(actors && props.roles.length > 0) && actors.map((element, index) => <ActorCard
                    key={"actor_card_" + index + "_" + element.name} role={props.roles[index].role} id={element.id}
                    photo={element.photo}
                    name={element.name}
                    born={element.born}/>)}
            </RowCards>
        </>
    );
}