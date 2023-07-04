import React, {FC} from 'react';
import st from ".//Genres.module.scss"
import {Category} from "@/shared/Category/Category";

export const Genres: FC = () => {
 return (
  <>
      <div className={st.genres}>
          <Category unicode={"1F37F"} title={"All"}/>
          <Category unicode={"1F601"} title={"Comedy"}/>
          <Category unicode={"1F984"} title={"Fantasy"}/>
          <Category unicode={"1F622"} title={"Drama"}/>
          <Category unicode={"1F4D7"} title={"History"}/>
          <Category unicode={"1F633"} title={"Horror"}/>
      </div>
  </>
 );
}
