import React, {FC} from 'react';
import st from "./Genres.module.scss"
import {Button} from "@/shared/Button/Button";
import {GetEmoji} from "@/shared/GetEmoji/GetEmoji";
import {useRouter} from "next/navigation";

export const Genres: FC = () => {

    function linkGenerator(genre: string) {
        return `/search/1/${genre.toLowerCase()}`
    }

    return (
        <>
            <div className={st.genres}>
                <Button title={"All"} link={linkGenerator("all")}>
                    <GetEmoji unicode={"1F37F"}/>
                </Button>

                <Button title={"Comedy"} link={linkGenerator("Comedy")}>
                    <GetEmoji unicode={"1F601"}/>
                </Button>
                <Button title={"Fantasy"} link={linkGenerator("Fantasy")}>
                    <GetEmoji unicode={"1F984"}/>
                </Button>

                <Button title={"Drama"} link={linkGenerator("Drama")}>
                    <GetEmoji unicode={"1F622"}/>
                </Button>

                <Button title={"History"} link={"History"}>
                    <GetEmoji unicode={"1F4D7"}/>
                </Button>

                <Button title={"Horror"} link={linkGenerator("Horror")}>
                    <GetEmoji unicode={"1F633"}/>
                </Button>

            </div>
        </>
    );
}
