import React from "react";
import { motion } from "framer-motion";
import './works.css'
import Upwork from "../../img/Upwork.png";
import Amazon from "../../img/amazon.png";
import Fiverr from "../../img/fiverr.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
  return (
    <div className="works" id="works">
      {/**Left side */}
      <div className="w-left">
        <div className="awesome">
  
            <span>Works for All these</span>
            <span>Brands & Clients</span>
            <span>
              Lorem ispum is simpley dummy text of printing of printing Lorem <br />
              ispum is simpley dummy text of printingLorem ispum is simpley
              dummy text <br /> y dummy text of printingLorem <br /> ispum is simpley dummy
              text of printing
            </span>

            <button className="button s-button">Hire me</button>
          </div>
        </div>
    

      {/**right side */}
      <div className="w-right">

        <motion.div
        initial={{rotate: 45}}
        whileInView={{rotate: 0}}
        viewport={{margin: "-40px"}}
        transition={{duration:3, type: "spring"}}
        className="w-mainCircle"
        >
        <div className="w-secCircle">
            <img src={Upwork} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Fiverr} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Amazon} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Shopify} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Facebook} alt="" />
        </div>
        </motion.div>

        <div className="w-backCircle blue"></div>
        <div className="w-backCircle yellow"></div>


      </div>
    </div>
  );
};

export default Works;
