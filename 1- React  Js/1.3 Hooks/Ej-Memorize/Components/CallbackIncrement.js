import React, { memo } from 'react'
import { Button } from 'react-bootstrap';

const CallbackIncrement = memo(({increment}) => {
    console.log("Me rendenrizan desde CallbackIncrement :( ")
  return (
    <div>
      <Button
        variant="danger"
        onClick={() => {
          increment(5)
        }}
      >
           Incrementar
      </Button>
    </div>
  )
})

export default CallbackIncrement
