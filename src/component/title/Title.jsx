import React from 'react'
import { Icon } from '../icon/Icon'

export const Title = ({ icon, text}) => {
  return (
    <div className='title'>
      <div className='icon'>
        <Icon type={icon}/>
      </div>
      {text}
    </div>
  )
}
