import { useState } from "react";
import { AppBar,Toolbar, IconButton, Snackbar, List , ListSubheader, Typography, ListItem, ListItemText } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import CircleIcon from '@mui/icons-material/Circle';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles({
    root: {
        marginTop: "22px",
        width: 300,
    },
    notiButton: {
        marginRight: 2
    },
    notiHeader: {
        backgroundColor: "#2d96fd",
        fontSize: "1rem",
        textAlign: "center"
    }
})

export default function notifications (){
    const classes = useStyles()
    const [open, setOpen] = useState(false);

    function handleClick () {
        setOpen(true)
    }

    function handleClose () {
        setOpen(false)
    }

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                        Nav Bar
                    </Typography>
                    <IconButton
                        className={classes.notiButton}                        
                        size="large"
                        color="inherit"
                        edge="end"
                    >
                        <NotificationsIcon 
                            onClick = {handleClick}
                        />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Snackbar
            className={classes.root}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            onClose={handleClose}
            >
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={
                      <ListSubheader 
                      className={classes.notiHeader}
                      component="div" 
                      id="nested-list-subheader"
                      >
                        Notifications
                      </ListSubheader>
                    }
                >
                    <ListItem>
                        <CircleIcon sx={{width:7, height:7,border:1,mx:-.5, mb:9, py:0,borderRadius: '50%', color:'white', borderColor: '#5f96cc',}}/>
                        <ListItemText
                             secondary="9:24AM"
                             sx={{borderLeft:1 ,px:1, mt:1.5,borderLeftColor:"grey.500"}}
                             primary={
                                <Typography>John Walker posted a photo on your wall.</Typography>
                             }
                        /> 
                    </ListItem>
                    <ListItem>
                    <CircleIcon sx={{width:7, height:7,border:1,mx:-.5, mb:9, py:0,borderRadius: '50%', color:'white', borderColor: '#5f96cc',}}/>
                        <ListItemText
                            secondary="8:19AM"
                            sx={{borderLeft:1 ,px:1, mt:1.5,borderLeftColor:"grey.500"}}
                            primary={
                                <Typography>Alice Parker commented your last post.</Typography>
                            }
                        /> 
                    </ListItem>
                    <ListItem>
                    <CircleIcon sx={{width:7, height:7,border:1,mx:-.5, mb:6, py:0,borderRadius: '50%', color:'white', borderColor: '#5f96cc',}}/>
                        <ListItemText
                            secondary="Yesterday"
                            sx={{borderLeft:1 ,px:1, mt:1.5,borderLeftColor:"grey.500"}}
                            primary={
                                <Typography>Luke Wayne added you as friend.</Typography>
                            }
                        /> 
                    </ListItem>
                </List>
            </Snackbar>
        </Box>
    )
}