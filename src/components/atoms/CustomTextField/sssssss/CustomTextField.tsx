import React from 'react'
import  {minWidth}  from '../../../../Pages/Form/form'
import { TextField } from '@mui/material'
function CustomTextField(props:{value:string | undefined,onChange:(event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void}) {
  return (
    <TextField
            label="Enter user name (surname first)"
            name="username"
            id="username"
            variant="outlined"
            sx={{minWidth,marginRight:2}}
            {...props}
             />
  )
}

export default CustomTextField