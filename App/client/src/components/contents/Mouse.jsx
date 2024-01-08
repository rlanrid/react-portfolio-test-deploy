import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4 }, ease: [0.33, 1, 0.68, 1] },
    closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4 }, ease: [0.13, 1, 0.92, 1] }
}

const Mouse = (props) => {
    const moreInfo = props.moreInfo
    const { active, index } = props.state;
    const container = useRef(null);

    useEffect(() => {
        let moveContainerX = gsap.quickTo(container.current, "left", { duration: 0.8, ease: "power3" });
        let moveContainerY = gsap.quickTo(container.current, "top", { duration: 0.8, ease: "power3" });

        window.addEventListener("mousemove", (e) => {
            let paddingValue = 176;
            let paddingValue2 = 225;

            if (window.innerWidth <= 1280) {
                paddingValue = 85;
                paddingValue2 = 225;
            } else if (window.innerWidth <= 780) {
                paddingValue = 20;
                paddingValue2 = 225;
            }

            const { clientX, clientY } = e;

            const x = clientX - paddingValue;
            const y = clientY - paddingValue2;

            moveContainerX(x);
            moveContainerY(y);
        })
    }, [])

    return (
        <>
            <motion.div ref={container} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className='mouse__wrap'>
                <div style={{ top: index * -100 + "%" }} className="mouse__slider">
                    {moreInfo.map((item, idx) => {
                        const { src, alt } = item;

                        return (
                            <div className="mouse" key={idx}>
                                <img src={src} alt={alt} />
                            </div>
                        )
                    })}
                </div>
            </motion.div>
        </>
    )
}

export default Mouse
