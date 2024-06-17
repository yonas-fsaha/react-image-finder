

import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import { Collections as CollectionsIcon } from '@mui/icons-material';

const Component = styled(AppBar)`
    background: #008b8b;
`;

const NavBar = () => {
    
    return (
        <Component position="static">
            <Toolbar>
                <CollectionsIcon />
                <Typography variant="h5" style={{marginLeft: 10}}>Image Finder</Typography>
            </Toolbar>
        </Component>
    )
}

export default NavBar;