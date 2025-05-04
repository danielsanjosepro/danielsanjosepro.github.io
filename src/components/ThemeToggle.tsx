"use client"; // Runs in the browser

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null; // Prevents hydration mismatch on SSR

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="py-2 px-3 rounded-2xl bg-background text-text text-xs"
        >
            {theme === "dark" ? "🌙" : "☀️"}
        </button>
    );
}

