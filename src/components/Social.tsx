"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Social = () => {
    return (
        <div className="text-primary text-lg flex">
            <a href="https://www.linkedin.com/in/daniel-san-jose-pro" className="mx-1">
                <FaLinkedin />
            </a>
            <a href="https://github.com/danielsanjosepro/" className="mx-1">
                <FaGithub />
            </a>
        </div>
    );
};
