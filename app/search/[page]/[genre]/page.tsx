import React, {FC} from 'react';
import {Search} from "@/features/Search";
import {Genres} from "@/widgets/Genres";

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
                <Genres/>
                <Search page={props.params.page} genre={props.params.genre}/>
            </div>
        </>
    );
}

export default CategoryPage;