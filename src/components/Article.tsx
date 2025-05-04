"use client";

import { motion } from "framer-motion";

export interface ArticleProps {
    image: string;
    title: string;
    description: string;
    date: string;
    link?: string;
}

export const Article = ({ title, description, date, link }: ArticleProps) => {
    return (
        <motion.article
            className="m-4 p-6 shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
        >
            <div className="">
                <div className="text-sm text-text">
                    {date}
                </div>
                <h3 className="text-xl font-bold text-text">
                    {title}
                </h3>
                <p className="text-text">
                    {description}
                </p>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center text-deep-purple dark:text-light-pink hover:underline"
                    >
                        Read more →
                    </a>
                )}
            </div>
        </motion.article>
    );
};
