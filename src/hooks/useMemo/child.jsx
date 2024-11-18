import React, { memo } from 'react'

 function Child_Memo({value}) {
    console.log(value,'fyucus')
  return (
    <div>
      
    </div>
  )
}
export default memo(Child_Memo)