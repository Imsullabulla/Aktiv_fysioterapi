"use client";

import React, { type ReactNode, type CSSProperties } from "react";

interface MarqueeProps {
    children: ReactNode;
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    vertical?: boolean;
    repeat?: number;
    style?: CSSProperties;
}

export function Marquee({
    children,
    className = "",
    reverse = false,
    pauseOnHover = false,
    vertical = false,
    repeat = 4,
    style,
}: MarqueeProps) {
    return (
        <>
            <style>
                {`
          @keyframes marquee-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-100% - var(--gap))); }
          }
          @keyframes marquee-scroll-vertical {
            from { transform: translateY(0); }
            to { transform: translateY(calc(-100% - var(--gap))); }
          }
        `}
            </style>
            <div
                className={className}
                style={{
                    "--gap": "1rem",
                    display: "flex",
                    overflow: "hidden",
                    gap: "var(--gap)",
                    flexDirection: vertical ? "column" : "row",
                    ...style,
                } as CSSProperties}
            >
                {Array.from({ length: repeat }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            display: "flex",
                            flexShrink: 0,
                            gap: "var(--gap)",
                            flexDirection: vertical ? "column" : "row",
                            alignItems: "center",
                            justifyContent: "space-around",
                            animation: `${vertical ? "marquee-scroll-vertical" : "marquee-scroll"} var(--duration, 40s) linear infinite`,
                            animationDirection: reverse ? "reverse" : "normal",
                            animationPlayState: "running",
                        }}
                        onMouseEnter={(e) => {
                            if (pauseOnHover) {
                                e.currentTarget.style.animationPlayState = "paused";
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (pauseOnHover) {
                                e.currentTarget.style.animationPlayState = "running";
                            }
                        }}
                    >
                        {children}
                    </div>
                ))}
            </div>
        </>
    );
}
