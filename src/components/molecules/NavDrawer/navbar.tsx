import {AppBar,Typography,Toolbar, Box, List, Drawer, ListItem} from '@mui/material';
import routingList from '../../../data/routing_list'
import { Link } from 'react-router-dom';
import {useTheme, Theme} from '@mui/material/styles'

const drawerWidth = "240px"

const navStyles = {
  appBar:(theme:Theme) => {
    return {
      zIndex:theme.zIndex.drawer + 1
    }
  },
  drawer:{
    width:drawerWidth,
    "& .MuiBackdrop-root":{
      display:"none"
    }
  },

  paper:{
    backgroundColor:"rgba(10,0,0,0.1)",
    width:drawerWidth
  }
}
function NavBar(){
  const theme = useTheme()
return (
<>
    <AppBar position="fixed" sx={navStyles.appBar(theme)}>
      <Toolbar>
        <Typography variant="h6">
          Advanced Tactics
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer 
    disableEnforceFocus
    variant="temporary" 
    open={true} 
    PaperProps={{sx:navStyles.paper,elevation:9}}
    sx={navStyles.drawer}
    >
      <Toolbar />
        <List>
         {routingList.map(item => {
          return(
           <ListItem key={item.text}>
             <Link to={item.route}>{item.text}</Link>
          </ListItem>
          )
         })}
        </List>
    </Drawer>
    </>
)
}

export default NavBar