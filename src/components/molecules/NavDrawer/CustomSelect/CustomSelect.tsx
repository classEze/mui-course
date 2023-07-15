import React from 'react'
import { skills } from '../../../../data/formData'
import {FormControl,Select,ListItemText,MenuItem, InputLabel, OutlinedInput,SelectChangeEvent
  } from '@mui/material'
  import { minWidth } from '../../../../Pages/Form/form'
  
function CustomSelect(props:{value:string[],onChange:(event: SelectChangeEvent<string[]>)=> void}) {
  return (
    <FormControl>
    <InputLabel id="skills">Select your skills</InputLabel>
    <Select
    multiple
    labelId="skills"
    input={<OutlinedInput label="Select your skill" />}
    id="skills-label"
    renderValue={(selected:string[])=> selected.join(',')}
    sx={{minWidth, marginRight:2}}
    {...props}
    >
     {
     skills.map((skillName,index) => {
      return(
        <MenuItem key={index} value={skillName}>
        <ListItemText primary={skillName} />
        </MenuItem>
      )
     })}

    </Select>
    </FormControl>
  )
}

export default CustomSelect