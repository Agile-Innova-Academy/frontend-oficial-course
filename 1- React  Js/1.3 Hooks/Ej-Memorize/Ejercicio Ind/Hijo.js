import React, { memo } from 'react'
import { Button } from 'react-bootstrap';

const Hijo = memo(({incrementar, n}) => {
   console.log("Me rendenrizan desde Hijo :( ", n);
   return (
     <div>
       <Button
         variant="danger"
         onClick={() => {
           incrementar(n);
         }}
       >
         Incrementar:  {n}
       </Button>
     </div>
   );
})

export default Hijo
