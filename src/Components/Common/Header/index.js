import { Switch } from "@mui/material";
// import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../Button";
import MobileDrawer from "./drawer";
import "./styles.css";
import DarkMode from "../DarkMode";


function Header() {


  return (
    <div className="header">
      
     <div className='logo'>
          <img src="https://i.ibb.co/x6FTCCy/logo.png" alt="CryptoTracker Logo" />
          <a href="/">
          <p >
            Cryptoastic<span style={{ color: "var(--blue)" }}>.</span>
          </p>
      </a>
     </div>
      <div className="links-flex">
     <DarkMode/>
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/compare">
          <p className="link">Compare</p>
        </a>
        <a href="/watchlist">
          <p className="link">Watchlist</p>
        </a>
       
      {/* </div>
      <div className='last-flex'> */}
      <a href="/dashboard">
          <Button
            text="Dashboard"
            onClick={() => {
              // console.log("Header>> dashboard-btn");
            }}
          />
        </a>
      </div>
      <MobileDrawer />
    </div>
  );
}

export default Header;