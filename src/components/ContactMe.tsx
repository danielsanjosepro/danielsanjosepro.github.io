"use client";
import { FaLinkedin } from "react-icons/fa";

export const ContactMe = () => {
    return (
        <div>
            Contact me on{' '}
            <a
                href="https://www.linkedin.com/in/daniel-san-jos%C3%A9-pro-0683441a5/"
                className="text-secondary hover:underline"
            >
                LinkedIn <FaLinkedin className="inline-block" />
            </a>
        </div>
    );
};

