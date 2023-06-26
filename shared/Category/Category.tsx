import React, {FC} from 'react';
import Link from "next/link";
import st from ".//Category.module.scss"
import {ICategory} from "@/shared/Category/Category.interface";

export const Category: FC<ICategory> = (props) => {


 return (
  <>
    <Link className={st.categoryButton} href={"/search/1/" + props.title.toLowerCase()}>
        {props.unicode && String.fromCodePoint(parseInt(props.unicode, 16))} {props.title}
    </Link>
  </>
 );
}
