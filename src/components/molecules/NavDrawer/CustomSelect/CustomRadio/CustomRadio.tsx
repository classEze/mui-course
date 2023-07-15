import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

function CustomRadio(props: {value:string,onChange:(event:React.ChangeEvent<HTMLInputElement>, value: string)=> void}) {
  return (
    <RadioGroup  id="work-preference" {...props}>
    <FormControlLabel control={<Radio />} label="Remote work" value="Remote work"/>
    <FormControlLabel control={<Radio />} label="Hybrid work" value="Hybrid work"/>
    <FormControlLabel control={<Radio />} label="Onsite work" value="Onsite work"/>
  </RadioGroup>
  )
}

export default CustomRadio