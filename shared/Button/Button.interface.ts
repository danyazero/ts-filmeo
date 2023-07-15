import {ReactNode} from "react";

export interface IButton{
    title: string,
    link?: string,
    disabled?: boolean,
    children?: ReactNode
}