import React from "react";
import Button from "../../Common/Button";
import "./styles.css";
import gradient from "../../../assets/gradient.png";
import iPhone from "../../../assets/iphone.png";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";

function LandingPageComponent() {
  return (
   <div>
     <div className="landing-wrapper">

      <div className="landing-left">
        <motion.h1
          className="heading-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Track Crypto */}
          Let's Ride to the Crypto Universe
        </motion.h1>
        {/* <div>
      <motion.h1
          className="heading-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
         Empower Your Investments: Real-Time Crypto Tracking 
        </motion.h1>
      </div> */}
       
        <motion.p
          className="para"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Stay Ahead of the Crypto Game with Real-Time Tracking – Explore Our
          Dynamic Dashboard! */}
          Welcome to our comprehensive crypto tracking platform designed to elevate your investment experience. Embrace the power of knowledge and make informed decisions in the dynamic world of cryptocurrencies. With real-time data and advanced analytics, our platform equips you with the tools to track your favorite digital assets, monitor market trends, and seize opportunities as they arise. <span color='var(--blue)'>Stay updated with us</span>
        </motion.p>
        
        <div>
      <motion.h1
          className="heading-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
         Empower Your Investments: Real-Time Crypto Tracking 
        </motion.h1>
      </div>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="/dashboard">
            <Button text="Dashboard" />
          </a>

          <RWebShare
            data={{
              text: "Blast Off into the World of Cryptos!",
              url: "https://crypto-tracker-five-sigma.vercel.app/",
              title: "CryptoTracker.",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button text="Share App" outlined={true} />
          </RWebShare>
        </motion.div>
      
      </div>
      <div className="landing-right">
        <img src={gradient} className="gradient" />
        <motion.img
          src={iPhone}
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
     
    </div>
   
    </div>
  );
}

export default LandingPageComponent;