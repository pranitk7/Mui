import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { AppBar, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import logo from "../assets/firebase.svg";
import CustomMenu from "./CustomMenu";
function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false); // Track search bar focus

  const handleSearchFocus = () => {
    setIsSearchActive(true);
    setIsExpanded(true); // Expand search bar on focus
  };

  const handleSearchBlur = () => {
    setIsSearchActive(false);
  };

  return (
    <AppBar position="sticky" sx={{ top: 0, px: 4, py: 1, bgcolor: "white" }}>



      
      <div className='container'>
        <img className="logo" src={logo} alt="Your Logo" />

       { !isSearchActive && <Stack direction="row" spacing={2}>
       <CustomMenu
          buttonLabel="Products"
          options={["Build", "Release & Monitor", "Engage"]}

        /> 
          <Button
          variant="text"
          
          aria-controls="customized-menu"
          aria-haspopup="true"
          sx={{ fontSize: 14, color: "#4f617f" }}
        >
          Solutions
        </Button>

        <Button
          variant="text"
          
          aria-controls="customized-menu"
          aria-haspopup="true"
          sx={{ fontSize: 14, color: "#4f617f" }}

        >
          Pricing
        </Button>

        <CustomMenu
          buttonLabel="More"
          options={["Docs", "Community", "Support"]}

        />
        
</Stack>
}

      

        <TextField
          variant="outlined"
          placeholder="Search Firebase"
          size="small"
          sx={{
            borderWidth: 1,
            color: "#4f617f",
            fontSize:'12px',
            mr: 2,
            width: isExpanded ? "80%" : "200px",
            transition: "width 0.3s ease-in-out",
            backgroundColor:'#f1f3f4'
            
          }}
          onClick={handleSearchFocus} // Focus on click
          onBlur={handleSearchBlur}
        />

       <div className='rightbox'>
       <Button   variant="text"
          
          aria-controls="customized-menu"
          aria-haspopup="true"
          sx={{ fontSize: 14, mx:3 , color: "#4f617f" }}>
        <WbSunnyIcon />
        </Button>

        <Button sx={{ fontSize: 14 }} variant="text" >Console</Button>

         <Button sx={{ fontSize: 14 }} variant="text" >Sign In</Button>
       </div>

      </div>
    </AppBar>
  );
}

export default Navbar;
