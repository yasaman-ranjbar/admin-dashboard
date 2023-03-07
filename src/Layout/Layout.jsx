import { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  ListItem,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Grid,
  Stack,
  Avatar,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TimelineIcon from "@mui/icons-material/Timeline";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PaidIcon from "@mui/icons-material/Paid";
import BarChartIcon from "@mui/icons-material/BarChart";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Layout = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarMenu = [
    {
      title: "Home",
      href: "/",
      icon: <HomeIcon />,
      subHeader: "Dashboard",
    },
    { title: "Analytics", href: "/", icon: <TimelineIcon /> },
    { title: "Sales", href: "/", icon: <TrendingUpIcon />, divider: true },
    { title: "Users", href: "/users", icon: <PeopleAltIcon /> },
    { title: "New User", href: "/new-user", icon: <GroupAddIcon /> },
    { title: "Products", href: "/products", icon: <StorefrontIcon /> },
    {
      title: "Transactions",
      href: "/new-user",
      icon: <PaidIcon />,
    },
    {
      title: "Reports",
      href: "/new-user",
      icon: <BarChartIcon />,
      divider: true,
    },
    { title: "Mail", href: "/new-user", icon: <MailIcon /> },
    { title: "Feedback", href: "/new-user", icon: <QuestionAnswerIcon /> },
    { title: "message", href: "/new-user", icon: <ChatBubbleOutlineIcon /> },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" component="div">
          Admin Dashboard
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {sidebarMenu.map((item, index) => (
          <Link key={index} to={item.href}>
            <ListItem
              disablePadding
              divider={item.divider ? <Divider /> : null}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>

                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container spacing={2} justifyContent="end" alignItems="center">
            <Grid item>
              <Stack
                direction="row"
                spacing={2}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <NotificationsNoneIcon />
                <LanguageIcon />
                <SettingsIcon />
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {props.children}
      </Box>
    </Box>
  );
};

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default Layout;
