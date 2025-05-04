"use client"; // Ensures it runs in the browser

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface ThemeWrapperProps {
    children: ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    );
}

