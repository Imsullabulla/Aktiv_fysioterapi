import React from 'react';

/**
 * Decorative flowing SVG lines for section backgrounds.
 * Renders subtle, organic flowing curves using the brand palette.
 */
export function FlowingLines({ className = '', variant = 'default' }: { className?: string; variant?: 'default' | 'alt' }) {
    if (variant === 'alt') {
        return (
            <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
                <svg
                    className="absolute w-full h-full"
                    viewBox="0 0 1440 600"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Flowing curves from right side */}
                    <path
                        d="M1500 80 Q1200 120 900 60 Q600 0 300 100 Q0 200 -60 150"
                        stroke="#224C4F"
                        strokeWidth="1.2"
                        strokeOpacity="0.06"
                        fill="none"
                    />
                    <path
                        d="M1500 130 Q1150 180 850 110 Q550 40 250 160 Q-50 280 -100 200"
                        stroke="#224C4F"
                        strokeWidth="1"
                        strokeOpacity="0.04"
                        fill="none"
                    />
                    <path
                        d="M1500 200 Q1100 150 800 220 Q500 290 200 180 Q-50 100 -100 160"
                        stroke="#DB7F67"
                        strokeWidth="0.8"
                        strokeOpacity="0.05"
                        fill="none"
                    />

                    {/* Bottom flowing curves */}
                    <path
                        d="M-60 480 Q200 400 500 460 Q800 520 1100 440 Q1300 380 1500 430"
                        stroke="#224C4F"
                        strokeWidth="1.2"
                        strokeOpacity="0.06"
                        fill="none"
                    />
                    <path
                        d="M-60 530 Q250 450 550 510 Q850 570 1150 490 Q1350 430 1500 480"
                        stroke="#224C4F"
                        strokeWidth="1"
                        strokeOpacity="0.04"
                        fill="none"
                    />
                    <path
                        d="M-60 420 Q300 370 600 430 Q900 490 1200 410 Q1400 350 1500 390"
                        stroke="#DB7F67"
                        strokeWidth="0.8"
                        strokeOpacity="0.04"
                        fill="none"
                    />
                </svg>
            </div>
        );
    }

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
            <svg
                className="absolute w-full h-full"
                viewBox="0 0 1440 600"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Primary flowing curves — teal */}
                <path
                    d="M-60 100 Q200 40 500 120 Q800 200 1100 80 Q1300 10 1500 60"
                    stroke="#224C4F"
                    strokeWidth="1.2"
                    strokeOpacity="0.06"
                    fill="none"
                />
                <path
                    d="M-60 140 Q250 70 550 160 Q850 250 1150 120 Q1350 40 1500 100"
                    stroke="#224C4F"
                    strokeWidth="1"
                    strokeOpacity="0.04"
                    fill="none"
                />
                <path
                    d="M-60 180 Q300 130 600 200 Q900 270 1200 150 Q1400 80 1500 140"
                    stroke="#DB7F67"
                    strokeWidth="0.8"
                    strokeOpacity="0.05"
                    fill="none"
                />

                {/* Secondary set — lower area */}
                <path
                    d="M1500 450 Q1200 520 900 440 Q600 360 300 480 Q100 550 -60 500"
                    stroke="#224C4F"
                    strokeWidth="1.2"
                    strokeOpacity="0.06"
                    fill="none"
                />
                <path
                    d="M1500 490 Q1150 560 850 480 Q550 400 250 530 Q50 600 -60 550"
                    stroke="#224C4F"
                    strokeWidth="1"
                    strokeOpacity="0.04"
                    fill="none"
                />
                <path
                    d="M1500 410 Q1100 470 800 400 Q500 330 200 440 Q0 510 -60 470"
                    stroke="#DB7F67"
                    strokeWidth="0.8"
                    strokeOpacity="0.04"
                    fill="none"
                />
            </svg>
        </div>
    );
}

/**
 * Wave divider SVG between sections.
 * Place between two sections for a smooth organic transition.
 */
export function WaveDivider({ flip = false, fromColor = '#ffffff', toColor = '#FAF7F2' }: { flip?: boolean; fromColor?: string; toColor?: string }) {
    return (
        <div className={`relative w-full h-16 md:h-24 -my-px ${flip ? 'rotate-180' : ''}`} aria-hidden="true" style={{ zIndex: 2 }}>
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1440 96"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Background fill — from color */}
                <rect width="1440" height="96" fill={fromColor} />
                {/* Wave shape — to color */}
                <path
                    d="M0 32 Q180 0 360 24 Q540 48 720 32 Q900 16 1080 36 Q1260 56 1440 28 L1440 96 L0 96 Z"
                    fill={toColor}
                />
            </svg>
        </div>
    );
}
