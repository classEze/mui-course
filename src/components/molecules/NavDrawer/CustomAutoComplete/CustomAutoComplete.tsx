import React from 'react'
import { roles } from '../../../../data/formData'
import { TextField,Autocomplete } from '@mui/material'
import { minWidth } from '../../../../Pages/Form/form'

type autoprops = {name:string,level:string} 

function CustomAutoComplete(props: {value:autoprops, onChange:(evt:React.SyntheticEvent<Element, Event>, value: autoprops | null ) => void}) {
  return (
    <Autocomplete
            sx={{minWidth}}
             options={roles}
             renderInput= {(props:any) => {
              return <TextField label="Select role" name="role" {...props} />
            }}
            getOptionLabel = {(option : autoprops) => `${option.name}`}
            renderOption = {(props:any, option:autoprops) => {
              return <li {...props}>
                {option.level + "(" + option.name + ")"}
                </li>
            }}
            isOptionEqualToValue={(option:autoprops,value:autoprops) => {
              return JSON.stringify(value) === JSON.stringify(option) || JSON.stringify(value) === JSON.stringify({name:"",level:""})
             }}
             {...props}
             />
  )
}

export default CustomAutoComplete