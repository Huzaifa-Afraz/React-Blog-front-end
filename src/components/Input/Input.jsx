import React from 'react'
export default function Input(props) {
  return (
    <div>
      <input name={props.name} type={props.type} placeholder={props.placeholder}  className={props.className}/>
    </div>
  )
}
