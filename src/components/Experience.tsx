"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    location: string;
    points: string[];
    skills?: string[];
    image: string;
    imageAlt: string;
}

const experiences: ExperienceItem[] = [
    {
        title: "Student Research Assistant",
        company: "Fraunhofer IKS",
        period: "April 2024 - now",
        location: "Munich, Germany",
        points: [],
        skills: ["ROS2", "C++", "Python", "Docker", "Manipulation", "RL"],
        image: "/img/fraunhofer.jpg",
        imageAlt: "Fraunhofer IKS logo"
    },
    {
        title: "Student Robotics Engineer",
        company: "Angsa Robotics",
        period: "2021 - 2023",
        location: "Munich, Germany",
        skills: ["ROS2", "C++", "Python", "Mobile Robots"],
        points: [],
        image: "/img/angsa.jpg",
        imageAlt: "Angsa Robotics logo"
    },
    {
        title: "Tutor in Mathematics",
        company: "Technical University of Munich",
        period: "2019 - 2023",
        location: "Munich, Germany",
        points: [],
        image: "/img/tum.png",
        imageAlt: "TUM logo"
    },
];

export const Experience = () => {
    return (
        <section>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
            >
                <div className="text-4xl font-bold text-secondary">
                    Experience
                </div>
                <div className="text-lg text-primary">
                    I have worked in the industry, university, and research institution during my studies and gained valuable experience in the field of robotics, project management and didactics. I am a valuable addition for a team of engineers and/or scientists.
                </div>
            </motion.div>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, shadow: "large" }}
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
                                        //width={48}
                                        //height={48}
                                        fill
                                        className="object-cover"
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
                            <div className="mt-4">
                                {exp.skills && (
                                    <div className="flex gap-4">
                                        {exp.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skillIndex}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                                                whileHover={{ scale: 1.15 }}
                                                className="px-3 py-1 text-xs text-background bg-primary rounded-md"
                                            >
                                                {skill}
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </ul>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};

