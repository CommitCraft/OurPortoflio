import React from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import FullStack from "../../img/fullstack.jpg";
import Profile from "../../img/profile.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Android from "../../img/android.png";
import Imogi from "../../img/h-ob-1.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";

const Intro = () => {
  // Transition
  const transition = { duration: 10, type: "spring" };

  return (
    <>
      <div className="Intro" id="Intro">
        {/* left Side */}
        <div className="i-left">
          <div className="i-name">
            {/* yahan change hy darkmode ka */}
            <span>Hi! I Am</span>
            <span>Vipin Kushwaha</span>
            <span>
              A Full Stack Developer with high level of experience in Android
              and Web designing and development, producting the Quality work...
            </span>
          </div>

          <button className="button i-button">Hire me</button>

          {/* social icons */}
          <div className="i-icons">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
        {/* Right Side */}
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img
            src={Profile}
            alt=""
            style={{ width: "350px", height: "300px", marginTop: "50px" }}
          />
          <motion.img
            initial={{ left: "-46%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={glassesimoji}
            alt=""
          />

          <img src={Imogi} alt="" style={{ marginTop: "70px" }} />

          <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
          >
            <FloatingDiv img={crown} text1="Web" text2="Developer" />
          </motion.div>

          <motion.div
            initial={{ left: "-32rem", top: "18rem" }}
            whileInView={{ left: "-10rem" }}
            transition={transition}
            className="floating-div"
          >
            <FloatingDiv img={Android} text1="Android" text2="Developer" />
          </motion.div>

          <motion.div
            className="floating-div"
            initial={{ left: "-9rem", top: "11rem" }}
            whileInView={{ left: "-5rem" }}
            transition={transition}
          >
            <FloatingDiv img={FullStack} text1="Full Stack" text2="Developer" />
          </motion.div>
          <motion.div
            initial={{ top: "78%", left: "20rem" }}
            whileInView={{ left: "58%" }}
            transition={transition}
            className="floating-div"
          >
            <FloatingDiv img={thumbup} text1="Best Design" text2="Award" />
          </motion.div>
          <div
            className="blur"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Intro;
