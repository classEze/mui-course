import {FormControl,FormGroup,TextField,Autocomplete,FormLabel,FormControlLabel,
  Paper,Select,ListItemText,MenuItem,Button,Stack,RadioGroup,Radio, InputLabel, OutlinedInput, Dialog, AlertTitle, Alert
} from '@mui/material'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { formValues,formData } from '../../data/formData'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import {useState} from 'react'
import CustomTextField from '../../components/atoms/CustomTextField/sssssss/CustomTextField'
import CustomAutoComplete from '../../components/molecules/NavDrawer/CustomAutoComplete/CustomAutoComplete'
import CustomSelect from '../../components/molecules/NavDrawer/CustomSelect/CustomSelect'
import CustomRadio from '../../components/molecules/NavDrawer/CustomSelect/CustomRadio/CustomRadio'



export const minWidth = 300;

function Form() {
  const getDefaultValues = () => {
    return {
      id:formData.length,
      name:"",
      role:{name:"",level:""},
      skills:[],
      startDate:new Date().toLocaleDateString(),
      preference:"Remote work"
    }
  }

  const [alertOpen,setAlertOpen] = useState<boolean>(false)

  const [data, setData] = useState<formValues>(getDefaultValues())

  function setState(key:string,value:any){
    if(key == "startDate"){
      setData(prev => ({...prev,startDate:new Date(value).toLocaleDateString()}))
      return;
    }
    setData(prev => ({...prev,[key]:value}))
  }

  function submitForm(){
    formData.push(data)
    setAlertOpen(true)
    console.log(formData)
    setData(getDefaultValues())
  }

  function alertClose(){
    setAlertOpen(false)
  }

  function clearForm(){
   setData(getDefaultValues())
  }

  return (
    <>
    <Paper>
    <FormControl>
        <FormGroup row sx={{padding:2,justifyContent:"space-between"}} >
            <CustomTextField
            value={data.name}
            onChange={ (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setState("name", event.target.value)}
             />

             <CustomAutoComplete
              value={data.role}
              onChange={(evt,value) => setState("role", value)}
             />
        </FormGroup>
        <FormGroup row sx={{padding:2,justifyContent:"space-between"}}>
          <CustomSelect 
          value={data.skills}
          onChange={(selected)=> setState("skills", selected.target.value)}
      
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
            label="Select Start Date"
            value={data.startDate}
            sx={{minWidth}}
            onChange={(newValue : string | null) => setState("startDate", newValue)}
             />
          </LocalizationProvider>
        </FormGroup>
        <FormGroup row sx={{padding:2,justifyContent:"space-between"}}>
          <FormGroup sx={{minWidth}}>
            <FormLabel component="legend">
              Work Preference
            </FormLabel>
            <CustomRadio value={data.preference} onChange={(event,value)=> setState("preference",value)} />
          </FormGroup>
          <Stack>
            <Button onClick={submitForm}>
              Submit
            </Button>
            <Button onClick={clearForm}>
              Clear
            </Button>
          </Stack>
        </FormGroup>
    </FormControl>
    </Paper>
    <Dialog open={alertOpen} onClose={alertClose}>
       <Alert>
        <AlertTitle>
          Success!!!
        </AlertTitle>
        Form data is legit and has been added to array
       </Alert>
    </Dialog>
    </>
  )
}

export default Form