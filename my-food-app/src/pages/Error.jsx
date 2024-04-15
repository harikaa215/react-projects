import React from 'react'
import {useRouteError} from 'react-router-dom';

const Error = () => {

    const err = useRouteError()
    console.log(err)

  return (
    <div>
        <p>Oops!!! Something went wrong, please try again after sometime.....</p>
    </div>
  )
}

export default Error