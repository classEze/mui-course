import NavBar from '../molecules/NavDrawer/navbar'
import { Toolbar } from '@mui/material'

function Page(props : any) {
  if(props.nav)
  return (
   <>
        <NavBar />
        <Toolbar />
        <main style={{marginLeft:"240px", padding:"5px"}}>
        {<props.component />}
        </main>
   </>
  )
  else{
    return <props.component />
  }
}

export default Page