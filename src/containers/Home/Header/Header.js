import "./Header.css";
import React, { useState } from "react";
import logo from "../../../assets/Olx_logo.png";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import Login from "../../Login/Login";

function Header() {
  const userData = useSelector((state) => state.user);
  const { user } = userData;
  const [modalShow, setModalShow] = useState(false);

  return (
    <nav className="header no-gutters">
      <div className="header__left">
        <div className="header__logo">
          <Link to="/">
            <img className="olx_logo" src={logo} />
          </Link>
        </div>
      </div>
      <div className="header__center">
        <div className="header__input">
          <SearchIcon fontSize="large" style={{ color: "#002F34" }} />
          <input type="text" placeholder="Pakistan" />
          <ExpandMoreIcon fontSize="large" style={{ color: "#002F34" }} />
        </div>
        <div className="header__search">
          <input
            type="text"
            placeholder="Find Cars, Mobile Phones and more..."
          />
          <div className="searchLogo">
            <span>
              <SearchIcon fontSize="large" style={{ color: "white" }} />
            </span>
          </div>
        </div>
      </div>
      <div className="header__right">
        <span className="login">
          {!user ? (
            <div>
              <button onClick={() => setModalShow(true)}>Login</button>
              <Login show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          ) : (
            <>
              <Link to="/" style={{ borderBottom: "none" }}>
                <IconButton>
                  <ChatBubbleOutlineIcon />
                </IconButton>
              </Link>
              <IconButton>
                <NotificationsNoneOutlinedIcon />
              </IconButton>
              <Avatar src={user.photoURL} />
            </>
          )}
        </span>
        <span className="SellItem">
          <Link className="sellitem_page" to="/Sellitem">
            <Button>
              <AddIcon />
              <span className="Sell-btn">SELL</span>
            </Button>
          </Link>
        </span>
      </div>
    </nav>
  );
}

export default Header;
