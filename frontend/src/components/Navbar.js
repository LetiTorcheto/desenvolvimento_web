import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,

} from "@mui/material";
import { ShoppingCart, AccountCircle } from "@mui/icons-material";
import logo from "../img/logo.jpg";
import { logout } from "../redux/slices/receptorSlice";
import styles from "./css/Navbar.css";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.user);
  const { userDetails } = userLogin;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleMenuClose();
    window.location.reload(); // Reload the page
  };

  return (
    <div class={styles.div}>
      <AppBar position="static" >
        
        <Toolbar>
          <Link to="/">
            <img
              src={logo}
              alt=""
              style={{
                height: 60,
              }}
              
            />
          </Link>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div style={{ marginLeft: "5vw" }}>
            <Link to="/catalogo">Produtos</Link>
          </div>
          <div />

          <div>
            <IconButton
              aria-label="show cart items"
              color="inherit"
              component={Link}
              to="/cart"
              style={{ color: "white" }}
            >
              <ShoppingCart />
            </IconButton>
          </div>
          {userDetails ? (
            <>
              <IconButton
                edge="end"
                aria-label="conta do usuário atual"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                style={{ color: "white" }}
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleMenuClose}
              >
                <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                  Perfil
                </MenuItem>

                <MenuItem onClick={handleLogout}>
                  Sair
                </MenuItem>
              </Menu>
            </>
          ) : (
            <div>
              <IconButton
                aria-label="login"
                color="inherit"
                component={Link}
                to="/login"
                style={{ color: "white" }}
              >
                <AccountCircle />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
