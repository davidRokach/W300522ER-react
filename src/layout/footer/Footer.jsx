import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import InfoIcon from "@mui/icons-material/Info";
import PortraitIcon from "@mui/icons-material/Portrait";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const Footer = () => {
  const navigate = useNavigate();
  const navigateTo = to => navigate(to);
  
  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigateTo(ROUTES.ABOUT)}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          onClick={() => navigateTo(ROUTES.FAV_CARDS)}
        />
        <BottomNavigationAction
          label="My Cards"
          icon={<PortraitIcon />}
          onClick={() => navigateTo(ROUTES.MY_CARDS)}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
