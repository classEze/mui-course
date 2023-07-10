import {AppBar,Typography,Toolbar, List, Drawer} from '@mui/material';

function NavBar(){
return (<>
    <AppBar>
      <Toolbar>
        <Typography variant="h6">
          Advanced Tactics
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer>
        <List>

        </List>
    </Drawer>

    </>
)

}

export default NavBar