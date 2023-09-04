import React, { Component } from 'react'
import Spinner from './spinner.gif'

const Loading=()=>{

    return (
      <div className='text-center'>
        <img src={Spinner} alt="" />
      </div>
    )

}

export default Loading
