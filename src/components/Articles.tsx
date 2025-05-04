"use client";
import { Article, ArticleProps } from "@/components/Article";
import { motion } from "framer-motion";

const articles: ArticleProps[] = [
    {
        image: "/images/article1.jpg",
        title: "Article 1",
        description: "This is a description for the first article. It talks about something interesting that you might want to read more about.",
        date: "2022-01-01",
        link: "https://example.com/article1",
    },
    {
        image: "/images/article2.jpg",
        title: "Article 2",
        description: "Here&apos;s another fascinating article that covers different topics and provides valuable insights into the subject matter.",
        date: "2022-02-15",
        link: "https://example.com/article2",
    },
    {
        image: "/images/article3.jpg",
        title: "Article 3",
        description: "The third article brings new perspectives and interesting discussions about various technological advancements.",
        date: "2022-03-30",
        link: "https://example.com/article3",
    }
];

export const Articles = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-secondary mb-2">Articles</h1>
            <div className="overflow-x-auto gap-6 md:grid md:grid-cols-3">
                {articles.map((article: ArticleProps, index: number) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                        key={index}
                        className="w-full flex-none snap-center"
                    >
                        <Article {...article} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
