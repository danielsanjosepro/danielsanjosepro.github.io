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
                Aspiring Robotics Engineer with a solid foundation in <b>ROS2, Python, and C++.</b>
                Since 2021, I&apos;ve gained hands-on experience through research groups, startups, and leading European universities.
                My core expertise lies in <b>robotic manipulation</b> using Universal Robots UR3 and Franka Emika FR3, as well as <b>mobile robot navigation</b>.
            </div>
        </div>
    );
};
