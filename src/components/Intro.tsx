"use client";
import { Typewriter } from "react-simple-typewriter";

export const Intro = () => {
    return (
        <div>
            <div className="text-3xl md:text-6xl font-bold text-primary">

                Hi, I am <Typewriter
                    words={["Daniel San Jose Pro.", "a Maker.", "a Robotics Engineer."]}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </div>
            <div className="text-lg md:text-2xl text-text">
                I am a master&apos;s student highly interested and talented in robotics.
                My main domains of interest lie at the intersection of <b>Control Theory and Machine Learning</b>.
                Additionally, I have experience working on larger robotics projects with <b>ROS2</b>.
                I have a great overview of the technologies and tools needed to develop and research in the field of robotics. I am also a fast learner and I am always eager to learn new things.
            </div>
        </div>
    );
};
