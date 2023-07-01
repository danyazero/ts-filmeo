import React, {FC} from 'react';
import {Search} from "@/features/Search/Search";
import {Pagination} from "@/features/Pagination/Pagination";
import {IFilm} from "@/Models/Models";

type Props = {
    params: {
        genre: string,
        page: string
    }
}

export async function generateMetadata(params: Props){

    return{
        title: "Search | Filmeo"
    }
}

const CategoryPage: FC<Props> = (props) => {
    return (
        <>
            <div>
                <p className={"text-white"}>
                    Genre {props.params.genre} (page {props.params.page})
                </p>
                <Search page={props.params.page} genre={props.params.genre}/>
            </div>
        </>
    );
}

export default CategoryPage;