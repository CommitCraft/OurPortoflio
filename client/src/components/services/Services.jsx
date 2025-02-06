import React from "react";
import "./Services.css";
import Card from "../cards/Cards";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Imogi from "../../img/h-ob-1.png";
import { motion } from "framer-motion";

const Services = () => {
  // Transition
  const transition = { duration: 10, type: "spring" };
  return (
    <>
      <div className="services" id="Services">
        {/* left Side */}
        <div className="awesome">
          <span>My Awesome</span>
          <span>Services</span>

          <a href="#" download>
            <button className="button s-button">Download CV</button>
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        {/* Right Side */}
        <div className="cards">
          <motion.img
            src={Imogi}
            alt=""
            whileInView={{ left: "50px" }}
            transition={transition}
            initial={{ Top: "70px", left: "10rem" }}
          />
          {/* first card */}

          <motion.div
            initial={{ left: "30rem" }}
            whileInView={{ left: "15rem" }}
            transition={transition}
          >
            <Card
              emoji={HeartEmoji}
              heading={"Mobile App Development"}
              detail={
                "I can provide Android and ios application development I can turn your idea into. reality startup with me."
              }
            />
          </motion.div>
          {/* Second card */}
          <motion.div
            initial={{ left: "-10rem", top: "7rem" }}
            whileInView={{ left: "1rem" }}
            transition={transition}
          >
            <Card
              emoji={Glasses}
              heading={"Website development "}
              detail={
                "I can provide a website design and development to make your business online to drive more customer and sales."
              }
            />
          </motion.div>

          {/* Third card */}
          <motion.div
            initial={{ top: "7rem", left: "20rem" }}
            whileInView={{ left: "30rem" }}
            transition={transition}
          >
            <Card
              emoji={Humble}
              heading={"Software development "}
              detail={
                "I can provide a custom software development for your Business, Billing, Inventory and Every type of custom software. "
              }
              color="rgba(252, 166, 31, 0.45)"
            />
          </motion.div>
          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Services;
