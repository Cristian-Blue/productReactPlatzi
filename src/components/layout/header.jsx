import { AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const Header = ({ click }) =>{
    return (
        <AppBar position="fixed"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton onClick={click} size="large" edge="start" color="white"><MenuIcon /></IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    03578 - Cristian Afanador
                </Typography>
            </Toolbar>
        </AppBar>
    );
}