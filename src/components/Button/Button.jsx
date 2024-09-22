import React from 'react'

export default function Button(props) {
  const{onSubmit=()=>{}}=props;
  return (
    <div>
      <button className={props.btnClass} onSubmit={onSubmit}>{props.name}</button>
    </div>
  )
}
