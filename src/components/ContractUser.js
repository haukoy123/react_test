import * as React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import MenuItem from '@mui/material/MenuItem';
import { MenuList } from '@mui/material';

function ContractUser({ userName }) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    function handleToggle() {
        // setOpen((prevOpen) => !prevOpen);
    }

    function handleClose() {

    }

    return (
        <>
            <div className='mx-5' onClick={handleToggle}>
                <PersonIcon sx={{ height: 40, width: 40 }} />
                <span className='text-lg'>
                    hau tran
                </span>
            </div>
            
                <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    // onKeyDown={handleListKeyDown}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
            
        </>

    )
}

export default ContractUser