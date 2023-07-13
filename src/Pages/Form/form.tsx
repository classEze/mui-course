import {FormControl,FormGroup,TextField,Autocomplete,FormLabel,FormControlLabel,
  Paper,Select,ListItemText,MenuItem,Button,Stack,RadioGroup,Radio
} from '@mui/material'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { roles,skills } from '../../data/formData'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'


function Form() {
  return (
    <>
    <Paper>
    <FormControl>
        <FormGroup row sx={{padding:2,justifyContent:"space-between"}} >
            <TextField
            name="username"
            id="username"
            variant="outlined"
             />

             <Autocomplete
             options={roles}
             renderInput= {(props) => {
              return <TextField name="role" {...props} />
            }}
            getOptionLabel = {(option) => `${option.name + option.level}`}
            renderOption = {(props, option) => {
              return <li {...props}>
                {option.level + "(" + option.name + ")"}
                </li>
            }}
             />
        </FormGroup>
        <FormGroup row sx={{padding:2,justifyContent:"space-between"}}>
          <Select
          id="skills"
          renderValue={(selected:string[])=> selected.join(',')}
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
            label="day"
            value="ABC"
            onChange={()=> {}}
             />
          </LocalizationProvider>
        </FormGroup>
        <FormGroup row sx={{padding:2,justifyContent:"space-between"}}>
          <FormGroup>
            <FormLabel component="legend">
              Work Preference
            </FormLabel>
            <RadioGroup id="work-preference" value="Hybrid work" >
              <FormControlLabel control={<Radio />} label="Remote work" value="Remote work"/>
              <FormControlLabel control={<Radio />} label="Hybrid work" value="Hybrid work"/>
              <FormControlLabel control={<Radio />} label="Onsite work" value="Onsite work"/>
            </RadioGroup>
          </FormGroup>
          <Stack>
            <Button>
              Submit
            </Button>
            <Button>
              Clear
            </Button>
          </Stack>
        </FormGroup>
    </FormControl>
    </Paper>
    </>
  )
}

export default Form