import { motion } from "framer-motion";
import React, { useContext, useMemo, useState, useEffect } from "react";

import { StaggerContext } from "../Stagger/Stagger";

export const FadeInFact = ({
    children,
    yOffset = 0, // y initial possition
    xOffset = -40, // x initial possition
    easing = "easeInOut", // [number, number, number, number] | "linear" | "easeIn" |
    //  "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" |
    // "backInOut" | "anticipate" | EasingFunction;
    duration = 0.4,
    delayOrder, // order of appearance
    ...rest
}) => {
    const { stagger } = useContext(StaggerContext);
    const [delay, setDelay] = useState(0.25);

    const offset = 0.4;

    useEffect(() => {
        if (delayOrder) return setDelay(delayOrder * offset);
    }, [delayOrder, offset]);

    const transition = useMemo(
        () => ({
            duration,
            delay,
            ease: easing,
        }),
        [duration, delay, easing]
    );

    const staggerTransition = {
        duration,
        ease: easing,
    };

    const variants = {
        hidden: { y: yOffset, x: xOffset, opacity: 0, transition },
        show: {
            y: 0,
            opacity: 1,
            transition: stagger ? staggerTransition : transition,
        },
    };

    return stagger ? (
        <motion.div variants={variants} {...rest}>
            {children}
        </motion.div>
    ) : (
        <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={variants}
            {...rest}
        >
            {children}
        </motion.div>
    );
};
