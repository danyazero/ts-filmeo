import React, {FC} from 'react';

type Props = {
    params: {
        category: string,
        page: string
    }
}

const CategoryPage: FC<Props> = (props) => {
    return (
        <>
            <div>
                <p className={"text-white"}>
                    Category {props.params.category} (page {props.params.page})
                </p>
            </div>
        </>
    );
}

export default CategoryPage;