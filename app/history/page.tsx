import React, {FC} from 'react';
import {GridCards} from "@/shared/GridCards/GridCards";
import {RenderHistory} from "@/features/RenderHistory/RenderHistory";

const Page: FC = () => {

    return (
            <>
                <GridCards header={"History"}>
                    <RenderHistory/>
                </GridCards>
            </>
    );
}

export default Page;