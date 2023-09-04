import React, { Component } from 'react'
import Spinner from './spinner.gif'

export class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Spinner} alt="" />
      </div>
    )
  }
}

export default Loading
