import "../styles/Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [current, setCurrent] = useState("");

  return (
    <div className="nav_container justify-center items-center flex flex-row w-full min-h-[5rem] ">
      {/* Left button */}
      <div className="left w-1/5 justify-center items-center align-middle flex flex-col ">
        <div className="ml-[-30%]">
          <h3 className="font-Roboto font-semibold font-normal text-[17px]">
            Omkar More
          </h3>
          <p className="font-Roboto font-normal text-sub_title font-medium text-[10px]">
            Web Developer
          </p>
        </div>
      </div>
      {/* mid nav bar */}
      <div className="mid w-3/5 justify-center flex flex-col items-center ">
        <div className="w-[180px] ">
          <div className="mx-[22%] w-[125px] relative z-10 h-[0.1px]">
            {current != location.pathname && location.pathname === "/" ? (
              <motion.div
                initial={{ x: 70 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className=" w-[25px] relative z-10 h-[0.1px] rounded-full bg-heading shadow-[0_2px_25px_2px_#fff]"
              ></motion.div>
            ) : (
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: 70 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className=" w-[25px] relative z-10 h-[0.1px] rounded-full bg-heading shadow-[0_2px_25px_2px_#fff]"
              ></motion.div>
            )}
          </div>
          <div className="w-[165px] relative">
            <div className="w-[165px] absolute h-[36px]  m-[6px]  rounded-full z-[2]">
              {current != location.pathname && location.pathname === "/" ? (
                <motion.div
                  initial={{ x: 90 }}
                  animate={{ x: 5 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className=" w-[80px] h-[36px] rounded-3xl  relative z-10 bg-[#3f3f3f] "
                ></motion.div>
              ) : (
                <motion.div
                  initial={{ x: 10 }}
                  animate={{ x: 85 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    type: "spring",
                  }}
                  className="  w-[80px] h-[36px] rounded-3xl  relative  z-10 bg-[#3f3f3f]"
                ></motion.div>
              )}
            </div>

            <div className="Nav_mid_container relative z-[5] w-[180px] h-[48px] px-[6px] bg-transparent flex justify-around items-center rounded-3xl border-[1px] border-border shadow-custom">
              <Link to="/">
                <button
                  className={` button_hover_left  font-medium text-[13px] w-[80px] h-[36px] rounded-3xl ${
                    location.pathname === "/" ? "  text-heading " : ""
                  }`}
                  onClick={() => setCurrent("/")}
                >
                  Work
                </button>
              </Link>
              <Link to="/info">
                <button
                  className={`button_hover_right text-[13px] w-[80px] h-[36px] rounded-3xl${
                    location.pathname === "/info" ? "  text-heading " : ""
                  }`}
                  onClick={() => setCurrent("/info")}
                >
                  Info
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="right w-1/5 justify-center flex flex-row">
        <div className="flex justify-around items-center">
          <Link>
            <button className="flex justify-around items-center Social_button font-medium text-[13px] w-[80px] h-[36px] rounded-3xl p-3">
              {" "}
              Linkedin <ArrowUpRight />{" "}
            </button>
          </Link>
          <Link>
            <button className="flex justify-around items-center Social_button font-medium text-[13px] w-[80px] h-[36px] rounded-3xl p-3">
              {" "}
              Resume <ArrowUpRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
