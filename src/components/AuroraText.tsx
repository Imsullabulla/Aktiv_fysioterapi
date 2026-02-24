"use client";

import React, { useMemo, type CSSProperties, type ReactNode } from "react";

interface AuroraTextProps {
    children: ReactNode;
    className?: string;
    colors?: string[];
    speed?: number;
}

export function AuroraText({
    children,
    className = "",
    colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
    speed = 1,
}: AuroraTextProps) {
    const gradientStyle = useMemo<CSSProperties>(() => {
        const gradientColors = colors.join(", ");
        return {
            backgroundImage: `linear-gradient(135deg, ${gradientColors}, ${colors[0]})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            backgroundSize: "400% 400%",
            animation: `aurora-shift ${6 / speed}s ease-in-out infinite`,
            display: "inline-block",
        };
    }, [colors, speed]);

    return (
        <>
            <style>
                {`
          @keyframes aurora-shift {
            0%, 100% {
              background-position: 0% 50%;
            }
            25% {
              background-position: 100% 50%;
            }
            50% {
              background-position: 100% 100%;
            }
            75% {
              background-position: 0% 100%;
            }
          }
        `}
            </style>
            <span className={className} style={gradientStyle}>
                {children}
            </span>
        </>
    );
}
