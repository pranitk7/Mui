import { useState, useEffect, useRef } from "react";
import { styled, Menu, MenuItem, Button } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const StyledMenu = styled((props) => (
  <Menu
    {...props}
    anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: theme.palette.background.paper, // White background
  },
  "& .MuiMenuItem-root": {
    color: theme.palette.text.secondary, // Dark grey text
    fontSize: 14, // Set font size to 14px
  },
}));

export default function CustomMenu({ buttonLabel, options }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuRef = useRef(null); // Reference for the menu element

  useEffect(() => {
    // Handle hover events
    if (anchorEl) {
      const handleMouseLeave = () => {
        setAnchorEl(null);
      };
      document.addEventListener("mouseleave", handleMouseLeave);
      return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }
  }, [anchorEl]);

  const handleMenuItemClick = () => {
    setAnchorEl(null); // Close menu on option selection
  };

  const handleMenuMouseLeave = (event) => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
      variant="text"
        id="menu-button"
        aria-controls="customized-menu"
        aria-haspopup="true"
        onMouseEnter={(event) => setAnchorEl(event.currentTarget)}
        sx={{ fontSize: 14 ,color:"#4f617f"}} // Adjust button font size
      >
        {buttonLabel} <ArrowDropDownIcon/>
      </Button>
      <StyledMenu
        ref={menuRef}
        id="customized-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuMouseLeave}
     
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleMenuItemClick}>
            {option}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
