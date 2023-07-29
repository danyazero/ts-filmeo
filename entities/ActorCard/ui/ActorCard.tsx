import React, {FC} from 'react';
import {IActorCard} from "@/entities/ActorCard/ActorCard.interface";
import st from "./ActorCard.module.scss"
import Image from "next/image";
import {getAge} from "@/entities/ActorCard/utils/getAge";
import {direction} from "@/Models/Models";

export const ActorCard: FC<IActorCard> = (props) => {
    return (
        <>
            <div className={st.actorCard} id={"actor_" + props.id}>
                <Image className={st.actorPhoto} src={direction + props.photo} alt={props.name} width={80} height={118}/>
                <div className={st.actorInfo}>
                    <h2>{props.name}</h2>
                    {props.role ? <p>Role: {props.role}</p> : <></>}
                    <p>Age: {getAge(props.born)}</p>
                </div>
            </div>
        </>
    );
}