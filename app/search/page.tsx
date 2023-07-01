'use client'
import React, {FC, useEffect} from 'react';
import {useRouter} from "next/navigation";

const SearchPage: FC = () => {
    const {push} = useRouter()
    useEffect(() => {
        return push('/search/1/all')
    }, [])

    return(<></>)
}

export default SearchPage;