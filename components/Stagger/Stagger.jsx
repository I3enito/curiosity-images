import { motion } from "framer-motion";
import React, { useContext } from "react";


export const StaggerContext = React.createContext();

export const StaggerWrap = ({
  children,
  delayOrder,
  delay = 0,
  childrenDelay = 3,
  ...rest
}) => {

  // const offset = 0.4;

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        // when: "beforeChildren",
        // delay: delayOrder ? delayOrder * offset : delay,
        delay,
        staggerChildren: childrenDelay
      }
    }
  };

  return (
    <StaggerContext.Provider value={{ stagger: true }}>
      <motion.div
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={variants}
        {...rest}
      >
        {children}
      </motion.div>
    </StaggerContext.Provider>
  );
};
