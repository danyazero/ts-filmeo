import React, {FC} from 'react';
import {redirect} from "next/navigation";

type Props = {
    params: {
        page: string
    }
}

const SearchPage: FC<Props> = (props) => {
    redirect('/search/'+props.params.page+'/all')

    return(<></>)
}

export default SearchPage;