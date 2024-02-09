import React, { memo } from 'react'

const Small = memo(({valor}) => {
    console.log("Me estoy renderizando desde Small :)")
  return (
    <div>{valor}</div>
  )
})

export default Small