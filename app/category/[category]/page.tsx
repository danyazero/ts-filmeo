import React, {FC} from 'react';

type Props = {
 params: {
  category: string
 }
}

const CategoryPage: FC<Props> = (props) => {
 return (
  <>
   <h2>Category: {props.params.category}</h2>
  </>
 );
}

export default CategoryPage;
