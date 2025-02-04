import React from "react";
import "./services.css";
import { motion } from "framer-motion"
import Cards from "../cards/Cards";
import emoji from "../../img/h-ob-1.png";
import heartImoji from "../../img/heartemoji.png"
const Services = () => {
  const transition = { duration: 10, type: "spring" };
  return (
    <>
      <div className="services">
        <div className="awesome">
          <h1 className="text">
            My awesome <span>Services</span>
          </h1>
          <a href="">
            <button> Download CV</button>
          </a>
        </div>

        <div className="cards">
          <motion.img
            src={emoji}
            alt="emoji"
            whileInView={{ left: "60px" }}
            transition={transition}
            initial={{ Top: "70px", left: "10rem" }}
          />
          <motion.div>
            <Cards
              emoji={heartImoji}
              heading={"Website development"}
              details={
                "I can provide a website design and development to make your business online to drive more customer and sales."
              }
            />
          </motion.div>
          <motion.div>
            <Cards
              emoji={heartImoji}
              heading={"Mobile App Development"}
              details={
                "I can provide Android and ios application development I can turn your idea into. reality startup with me."
              }
            />
          </motion.div>

          <motion.div>
            <Cards
              emoji={heartImoji}
              heading={"Website development"}
              details={
                "I can provide a custom software development for your Business, Billing, Inventory and Every type of custom software."
              }
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
