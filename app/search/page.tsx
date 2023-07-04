import React, {FC} from 'react';
import {redirect} from "next/navigation";

const SearchPage: FC = () => {
    redirect('/search/1/all')

    return(<></>)
}

export default SearchPage;