import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className={props.btnClass}>{props.name}</button>
    </div>
  )
}
