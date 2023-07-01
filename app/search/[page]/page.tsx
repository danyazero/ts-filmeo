'use client'
import React, {FC, useEffect} from 'react';
import {useRouter} from "next/navigation";

type Props = {
    params: {
        page: string
    }
}

const SearchPage: FC<Props> = (props) => {
    const {push} = useRouter()
    useEffect(() => {
        return push('/search/' + props.params.page + '/all')
    }, [])

    return(<></>)
}

export default SearchPage;