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
      <a href="/">
        <h1 style={{ fontSize: "2rem" }}>
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </a>
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