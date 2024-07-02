import React from 'react'
export default function Input(props) {
  const {name='',type=
    'text',placeholder='', className,value='',onChange=()=>{}} = props
  
  return (
    <div>
      <input name={name} type={type} placeholder={placeholder}  className={className} value={value} onChange={onChange} required/>
    </div>
  )
}
