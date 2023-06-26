import React, {FC} from 'react';
import {Search} from "@/features/Search/Search";
import {DynamicMovies} from "@/widgets/DynamicMovies/DynamicMovies";
import {Pagination} from "@/features/Pagination/Pagination";

type Props = {
    params: {
        page: string
    }
}

const SearchPage: FC<Props> = (props) => {
    console.log("page + " + props.params.page)
    return (
        <div>
            <p className={"text-white"}>
                Search (page {props.params.page})
            </p>
            <Search/>
            <DynamicMovies page={props.params.page}/>
            <Pagination page={props.params.page}/>
        </div>
    );
}

export default SearchPage;