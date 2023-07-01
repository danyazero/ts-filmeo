import React, {FC} from 'react';
import st from ".//Input.module.scss"

export const Input: FC<{value: string, onChange(event:  React.ChangeEvent<HTMLInputElement>): void, placeholder: string}> = (props) => {
 return (
  <>
    <input className={st.input} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
  </>
 );
}
