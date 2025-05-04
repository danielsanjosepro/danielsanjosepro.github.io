"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface StudiesItem {
    title: string;
    company: string;
    period: string;
    location: string;
    points: string[];
    image: string;
    imageAlt: string;
}

const experiences: StudiesItem[] = [
    {
        title: "Exchange Semester",
        company: "KTH Royal Institute of Technology",
        period: "2022 - 2023",
        location: "Stockholm, Sweden",
        points: [],
        image: "/img/kth.png",
        imageAlt: "KTH Royal Institute of Technology logo"
    },
    {
        title: "Exchange Semester",
        company: "ETH Zurich",
        period: "2021 - 2022",
        location: "Zürich, Switzerland",
        points: [],
        image: "/img/eth.png",
        imageAlt: "ETH Zurich logo"
    },
    {
        title: "Bachelor's and Master's Degree",
        company: "Technical University of Munich",
        period: "2019 - 2024",
        location: "Munich, Germany",
        points: [],
        image: "/img/tum.png",
        imageAlt: "Technical University of Munich logo"
    }
];

export const Studies = () => {
    return (
        <section>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
            >
                <div className="text-4xl font-bold text-secondary">
                    Studies
                </div>
                <div className="text-lg text-primary">
                    I have studied at some of the best universities in Europe during my Bachelor&apos;s and Master&apos;s gaining knowledge in engineering and science.
                </div>
            </motion.div>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, shadow: "large" }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-4 border-l-2 border-primary/20"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20" />

                        <div className="mb-2">
                            <div className="flex items-center gap-4 mb-3">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative w-12 h-12 flex-shrink-0 overflow-hidden rounded-lg shadow-md"
                                >
                                    <Image
                                        src={exp.image}
                                        alt={exp.imageAlt}
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <div>
                                    <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                                    <div className="text-secondary">
                                        <span>{exp.company}</span>
                                        <span className="mx-2">•</span>
                                        <span>{exp.location}</span>
                                    </div>
                                    <div className="text-sm text-secondary/80">{exp.period}</div>
                                </div>
                            </div>
                        </div>

                        <ul className="mt-4 space-y-2">
                            {exp.points.map((point, pointIndex) => (
                                <motion.li
                                    key={pointIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + pointIndex * 0.1 }}
                                    className="flex items-start"
                                >
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/40" />
                                    <span className="text-secondary">{point}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section >
    );
};

