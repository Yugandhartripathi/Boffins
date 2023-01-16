import React, { useMemo, useState } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Team = () => {
  const [email, setEmail] = useState("");
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to handle form submission here
    console.log("subscribed email:", email);
    setEmail("");
  };

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="team"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Want to stand out in the engineering field?{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              In today's fast-paced and highly competitive business environment,
              it is important for engineers to have a well-rounded set of skills
              to be successful. While technical expertise is essential, it is
              not enough on its own. Engineers also need to have strong product
              and engineering skills to be able to create innovative and
              effective solutions that meet the needs of customers. Product
              skills include understanding user needs and market trends,
              developing product roadmaps, and driving product development.
              Engineering skills include expertise in a specific area such as
              coding, data analysis, or machine learning, and the ability to
              design and implement solutions that are efficient and scalable.
              Together, these skills enable engineers to create products that
              are both technically sound and commercially viable, which is
              essential for success in today's market.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}></motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <form onSubmit={handleSubmit}>
                <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                  <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                    <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                      Interested? <br /> Join the waitlist!
                    </h5>
                    <p>We will keep you updated on the progress. (No spams)</p>
                  </div>
                  <div className="relative w-full">
                    <input
                      className="w-full rounded-md p-2  text-gray-600"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <ButtonPrimary type="submit">Subscribe</ButtonPrimary>
                  </div>
                </div>
              </form>

              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Team;
