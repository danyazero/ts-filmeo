'use client'
import React, {FC} from 'react';
import {GridCards} from "@/shared/GridCards/GridCards";
import {RenderHistory} from "@/features/RenderHistory";

const Page: FC = () => {

    return (
            <>
                <button onClick={() => localStorage.clear()}>clear</button>
                <GridCards header={"History"}>
                    <RenderHistory/>
                </GridCards>
            </>
    );
}

export default Page;