import React, {FC} from 'react';
import {IGetEmoji} from "@/shared/GetEmoji/GetEmoji.interface";

export const GetEmoji: FC<IGetEmoji> = (props) => {
    return (
        <p>
            {props.unicode && String.fromCodePoint(parseInt(props.unicode, 16))}
        </p>
    );
}