import React, {FC} from 'react';
import st from ".//Input.module.scss"

export const Input: FC<{value: string, onChange(event:  React.ChangeEvent<HTMLInputElement>): void, type?: string, name?: string, required?: boolean, placeholder: string}> = (props) => {
 return (
  <>
    <input className={st.input} name={props.name ? props.name : props.type} type={props.type ? props.type : "text"} required={props.required ? props.required : false} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
  </>
 );
}
