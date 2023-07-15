'use client'
import React, {FC} from 'react';
import {GridCards} from "@/shared/GridCards/GridCards";
import {RenderHistory} from "@/features/RenderHistory/RenderHistory";
import {Button} from "@/shared/Button/Button";

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