import React from 'react'

export default function Button(props) {
  const{btnClass='',name='', onSubmit=()=>{}}=props;
  return (
    <div>
      <button className={props.btnClass} onSubmit={onSubmit}>{props.name}</button>
    </div>
  )
}
