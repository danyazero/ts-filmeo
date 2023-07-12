import React, {FC} from 'react';
import {IActorCard} from "@/entities/ActorCard/ActorCard.interface";
import st from "./ActorCard.module.scss"
import Image from "next/image";
import {getAge} from "@/entities/ActorCard/utils/getAge";

export const ActorCard: FC<IActorCard> = (props) => {
    const fullName = props.name + " " + props.surname;
    return (
        <>
            <div className={st.actorCard} id={"actor_" + props.id}>
                <Image className={st.actorPhoto} src={props.photo} alt={fullName} width={80} height={118}/>
                <div className={st.actorInfo}>
                    <h2>{fullName}</h2>
                    <p>Role: {props.role}</p>
                    <p>Age: {getAge(props.born)}</p>
                </div>
            </div>
        </>
    );
}