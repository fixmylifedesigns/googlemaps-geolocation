import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function MenuButton(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
 const darkmode = () => {
    localStorage.setItem("mapmode", "darkmode")
    window.location.reload();

  }
  const lightmode = () => {
    localStorage.setItem("mapmode", "lightmode")
    window.location.reload();
  }
  return (
    <div style={{position:"absolute", top:"110px", left:"3.5%"}}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
      >
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={lightmode}>Light Mode</MenuItem>
        <MenuItem onClick={darkmode}>Dark Mode</MenuItem>
        <MenuItem > <a href="https://github.com/fixmylifedesigns/googlemaps-geolocation" style={{textDecoration:"none", color:"black"}}>GitHub Repo</a></MenuItem>
        <MenuItem ><a href="https://www.duranirving.com" style={{textDecoration:"none", color:"black"}}>Contact</a></MenuItem>
      </Menu>
    </div>
  );
}
