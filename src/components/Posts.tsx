"use client";
import { motion } from "framer-motion";

export const Posts = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-secondary mb-2">Projects</h1>
            <div className="overflow-x-auto gap-6 md:grid md:grid-cols-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                    className="w-full flex-none snap-center"
                >
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7374008929858707457?collapsed=1" height="550" width="504" frameBorder="1" allowfullscreen="" title="Embedded post"></iframe>       <div className="mt-4" />
                </motion.div>
            </div>
        </div>
    );
};
