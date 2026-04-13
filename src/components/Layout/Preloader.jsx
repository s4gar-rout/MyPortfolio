import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../../styles/Preloader.css';

const Preloader = ({ onComplete }) => {
    const [count, setCount] = useState(0);
    const containerRef = useRef(null);
    const orbRef = useRef(null);
    const contentRef = useRef(null);

    // Counter logic
    useEffect(() => {
        const interval = 15; // Fast and smooth
        
        const timer = setInterval(() => {
            setCount(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 2;
            });
        }, interval);

        return () => clearInterval(timer);
    }, []);

    // Animations
    useGSAP(() => {
        // Pulse animation for the orb (Scale + Blur)
        gsap.to(orbRef.current, {
            scale: 1.5,
            filter: "blur(60px)",
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Exit animation when count reaches 100
        if (count === 100) {
            const tl = gsap.timeline({
                onComplete: () => {
                    if (onComplete) onComplete();
                }
            });

            tl.to(contentRef.current, {
                y: -100,
                opacity: 0,
                duration: 0.8,
                ease: "power4.in"
            })
            .to(containerRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut"
            });
        }
    }, { scope: containerRef, dependencies: [count] });

    return (
        <div className="preloader-overlay" ref={containerRef}>
            <div className="preloader-content" ref={contentRef}>
                <div className="glowing-orb" ref={orbRef}></div>
                <h1 className="percentage-counter">
                    {count < 10 ? `0${count}` : count}
                </h1>
                <p className="status-msg">
                    Initializing System
                </p>
            </div>
        </div>
    );
};

export default Preloader;
